/**
 * @class ImportPackage
 * @classdesc This class is responsible to make import operations of SCORM, EPUB, IMS y EXE Files
 */
function ImportPackage(){}

/**
 * This method is responsible for reading SCORM, EPUB, IMS and ELP content (Metadata + Data)
 * It assures existence of key files (imslrm and imsmanifest) and extracts all zip file
 * In addition, in case of IMS/SCORM, it detects if there is any metadata file
 * @param  {String} content of the SCORM/IMS/EPUB file
 * @param  {String} path of the SCORM/IMS/EPUB element
 * @param  {String} type of package
 */
ImportPackage.prototype.processPackage = function processPackage(data, filePath, fileType)
{
	var exists = false;
	var exists2 = false;
	var zip = new JSZip(data);
	var fs = require('fs');
	var fs2 = require('fs-extra');
	var path = require("path");
//	var tempPath = "/tmp/cloudbook/";
    var mktemp = require('mktemp');
    var tempPath = mktemp.createDirSync("/tmp/cloudbook_XXXX/");
	var metadataFile = "";
	var that = this;

	fs2.emptyDirSync(tempPath);
	if(fileType == "EPUB" && zip.file("META-INF/container.xml") != null){  
		exists = true;
		exists2 = true;
	}

	$.each(zip.files, function (index, zipEntry) {
		if((fileType == "IMS") && (zipEntry.name === "imsmanifest.xml"))
		    exists2 = true;
		if((fileType == "SCORM") && (zipEntry.name === "imsmanifest.xml"))
		    exists2 = true;
		if(fileType == "ELP"){     
		     if(zipEntry.name === "contentv3.xml" || zipEntry.name ==="contentv2.xml")
		     	exists2 = true;
		     if(zipEntry.name === "imslrm.xml"){
		     	exists = true;
		     	metadataFile = zipEntry.name; 
		     }
		}
		if (zipEntry.name.indexOf("/") != -1) 
			if(!fs2.existsSync(tempPath + zipEntry.name.substring(0,zipEntry.name.lastIndexOf("/")))) 
				fs2.mkdirpSync(tempPath + zipEntry.name.substring(0,zipEntry.name.lastIndexOf("/")));

        if(!zipEntry.dir)
	     {
	         var content = zip.files[zipEntry.name].asNodeBuffer();
	         var dest = path.join(tempPath, zipEntry.name);
		     fs.writeFileSync(dest, content);

		     if((fileType == "IMS" || fileType == "SCORM") && zipEntry.name === "imsmanifest.xml")
		     {
		     	$(content.toString()).find("metadata").children().each(function(){
		     		if(this.tagName == "ADLCP:LOCATION"){
		     			exists = true;	
		     			metadataFile = this.innerHTML;
		     		} 
		     	})
		     	if(exists == false){
		     		exists = true;
		     		metadataFile = null;
		     	}
		     }
	     }
	});

	if(exists)
		that.processPackageMetaData(fileType, tempPath, filePath, metadataFile);

	if(exists2){
		switch(fileType)
		{
			case "EPUB": application.importepub.getInstance().processPackageDataEPUB(tempPath); break;
			case "ELP": application.importelp.getInstance().processPackageDataELP(tempPath); break;
			default: that.processPackageData(tempPath, fileType, tempPath); break;
		}
	}
}

/**
 * This method is responsible for reading SCORM/IMS metadata
 * It reads metadata and loads it into array
 * @param  {String} type of package
 * @param  {String} temporary path
 * @param  {String} path of the SCORM/IMS/EPUB element
 * @param  {String} name of the metadata file
 */
ImportPackage.prototype.processPackageMetaData=function processPackageMetaData (fileType, tempPath, filePath, metadataFileName)
{

	var fs = require('fs');
	var epub2html = require('epub3tohtml');
	var htmlData;

	switch(fileType)
	{
		case "SCORM":
		case "IMS":
		//case "ELP":
			if (fs.existsSync(tempPath+metadataFileName)){
				fs.readFile(tempPath+metadataFileName, function(err, data) {
				  	application.importmetadata.getInstance().loadMetadata(data.toString());
				});
			}
			else{
				fs.readFile(tempPath+"imsmanifest.xml", function(err, data) {
				  	application.importmetadata.getInstance().loadIMSMetadata(data.toString());
				});
			}
		break;
		case "EPUB":
			epub2html.parse(filePath, function (err, epubData) {
				htmlData = epub2html.convertMetadata(epubData);
				application.importmetadata.getInstance().loadEPUBMetadata(htmlData.htmlMetas);
			});
		break;
	}
}

/**
 * This method is responsible for adapt paths of imgs 
 * @param  {String} code to be processed
*/
ImportPackage.prototype.changeImagePath = function changeImagePath(htmlCode, filePath)
{
	filePath = filePath == undefined?"":filePath;

	$(htmlCode).find("img").each(function(){
		if(($(this).attr("src").indexOf(Project.Info.projectpath) == -1) && ($(this).attr("src").indexOf("http") == -1))
			$(this).attr("src", Project.Info.projectpath + "/rsrc/" + filePath+ "/" + $(this).attr("src"));			
	});
}

/**
 * This method is responsible for load resources of each element
 * @param  {String} element to be processed
 * @param  {String} name of resource
*/
ImportPackage.prototype.loadElementResources = function loadElementResources(element, filter, tempPath)
{
	var fsextra = require('fs-extra');
	var path = require('path');
//	var tempPath = "/tmp/cloudbook/";
//    var mktemp = require('mktemp');
//    var tempPath = mktemp.createDirSync("/tmp/cloudbook_XXXX/");

	var childrenFiles = element.parents().find("resource[identifier='" + filter + "']").children("file");
	childrenFiles.each(function(){
		var auxPath = $(this).attr("href");
	        fsextra.copySync(path.join(tempPath, auxPath), path.join(Project.Info.projectpath, "/rsrc/", auxPath));
	});
}

/**
 * This method is responsible for reading SCORM/IMS data
 * It reads files to be included and creates sections for each one
 * @param  {String} path of the unzipped elements
 */
ImportPackage.prototype.processPackageData = function processPackageData(filePath, fileType, tempPath) {
	var fs = require("fs"),
		fsextra = require("fs-extra"),
		path = require("path"),
		controller = application.controller.getInstance(),
		ui = application.ui.core.getInstance(),
		importationHTML = application.importhtml.getInstance(),
		that = this;
	contentfile = fs.readFileSync(path.join(filePath,"imsmanifest.xml"));
	that.processImsmanifest(contentfile,filePath, fileType, tempPath);
	ui.loadContent(Cloudbook.UI.selected.attr('data-cbsectionid'));
};


ImportPackage.prototype.processImsmanifest = function processImsmanifest(contentfile,filePath, fileType, tempPath) {
	var that = this,
		idsection = Cloudbook.UI.selected.attr('data-cbsectionid'),
		idsectionroot = $(`[data-cbsectionid=${idsection}]`).parent().closest("[data-cbsectionid]").attr("data-cbsectionid"),
		items;
        
 
	items = $(contentfile.toString()).find("organization").children("item");
	items.each(function(){
		
		var item = $(this);
		if(item.attr("identifierref")){
			if(item.children("item").length > 0){
				that.processItemWithChildren(item,idsectionroot,filePath,tempPath,idsection);
				idsection = null;
			}
			else{
				that.processContent(item,idsectionroot,filePath,tempPath,idsection);
			  	idsection = null;
			}
		}
		else{
			that.processItemWithChildren(item,idsectionroot,filePath,tempPath,idsection);
			idsection = null;
		}
	});
};

ImportPackage.prototype.processItemWithChildren = function processItemWithChildren(item,idparentsection,filePath,tempPath,idsection) {
	var that = this, 
		result;
	
	result = that.processContent(item,idparentsection,filePath,tempPath,idsection);
	result.idparentsection = result.idsection;
	idsection = result.idsection;
	delete result.idsection;
	
    that.processChilds(item,filePath,tempPath,result);
};


ImportPackage.prototype.updateSectionName = function updateSectionName(item,idsection) {
	
	var title = item.children("title").html(),
		controller = application.controller.getInstance();
	controller.updateSectionName(title,idsection);
};

ImportPackage.prototype.processContent = function processContent(item, idparentsection,filePath,tempPath, idsection) {
	var result,
	that = this,
	contentinchildren = false;
	controller = application.controller.getInstance(),
	importhtml = application.importhtml.getInstance();

    
	if(!idsection){
		idsection = controller.appendSection(idparentsection);
	}
   
    that.updateSectionName (item,idsection); 
	var href, html, resourceid;
	if(item.attr("identifierref")){
		resourceid = item.attr("identifierref");
	}
	else{
		resourceid = item.children("item:first").attr("identifierref");
		contentinchildren = true;
	}
	href = item.parents().find("resource[identifier='" + resourceid + "']").attr("href");
	html = $.parseHTML(fs.readFileSync(filePath + href).toString());



	
	that.changeImagePath(html);
	that.loadElementResources(item, resourceid, tempPath);
	importhtml.processHTML(html, filePath + href, idsection);
	return {idsection:idsection,contentinchildren:contentinchildren};
};
/**
 * @param  {Object}  options
 * 		   {String}  options.idparentsection
 * 		   {String}	 options.contentinchildren
 */
ImportPackage.prototype.processChilds = function processChilds(item,filePath,tempPath,options) {
	var children,
		that = this;
	if (options.contentinchildren){
		children = item.children("item:gt(0)");
	}
	else{
		children = item.children("item");
	}
	
	children.each(function(){
		
		var item = $(this);
		if(item.attr("identifierref")){
			/**
				Tenemos el recurso completo
			*/
			if(item.children("item").length > 0){
				that.processItemWithChildren(item,options.idparentsection,filePath,tempPath);
				idsection = null;
			}
			else{
				that.processContent(item,options.idparentsection,filePath,tempPath);
				idsection = null;
			}
		}
		else{
			/**
			listado de items entre los cuales esta el titulo y el contenido, que el contenido es el primer item
			*/
			that.processItemWithChildren(item,options.idparentsection,filePath,tempPath);
		}
	})
};

ImportPackage.prototype.getHtmlFromItem = function getHtmlFromItem(item,filePath) {
	var href, html, resourceid;
	
	if(item.attr("identifierref")){
		resourceid = item.attr("identifierref");
	}
	else{
		resourceid = item.children("item:first").attr("identifierref");
	}
	href = item.parents().find("resource[identifier='" + resourceid + "']").attr("href");
	html = $.parseHTML(fs.readFileSync(filePath + href).toString());
	return {html:html,resourceid:resourceid};
};



CBUtil.createNameSpace('application.importpackage');
application.importpackage = CBUtil.singleton(ImportPackage);