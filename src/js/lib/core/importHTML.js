/**
 * @class ImportHTML
 * @classdesc This class is responsible to make import operations of HTML Files
 * it loads TextTags
 */
function ImportHTML(){
	this.topValue = 0;
	this.blockText = document.createElement('div');
	this.textCandidates = getTextTags();
}

/**
 * This method is responsible for getting tags for each component
 * @param  {Object} node which tag is to be found
 * @result  {Object[]} array of possible candidates
 */
function getHTMLTags(node)
{
	var tag = node.tagName;
	var listactions = {};
	var x = Cloudbook.Actions;
	var keylist = Object.keys(x);
	var candidates = [];
	var score = 0;

	keylist.forEach(function(key){
		var aux = new x[key]['component'](); 
		var scoreElement = aux.HTMLtags(node);
		if(score < scoreElement)
		{  
			candidates = [];
			candidates.push(key);
			score = scoreElement;
		}
	});
	return candidates;
}

/**
 * This method is responsible for getting tags for text component
 * @param  {String} tag to be found
 * @result  {Object[]} array of possible candidates
 */
function getTextTags()
{
	var listactions = {};
	var x = Cloudbook.Actions;
	var keylist = Object.keys(x);
	var candidates = [];

	keylist.forEach(function(key){
		var aux = new x[key]['component']();
		if(x[key]['path'] ==='components/core/text') 
		candidates.push.apply(candidates, aux.HTMLtagNames());
	});
	return candidates;
}

/**
 * This method is responsible for extracting non-Text elements and processing them
 * It searches elements, process them and removes them from the code
 * @param  {Object} text to be processed
 * @param  {String} path of the element
 * @param  {String} id of section selected
 * @result  {String} text processed

 */
function extractElements(element, filePath, idsectionselected){
	debugger;
	try{
		$(element).find("img, iframe, video, audio, object").each(function(){
		  	processElementBlock($(this)[0], filePath, idsectionselected);
		  	this.outerHTML = "";
		});

		while(element.indexOf("<img") != -1)
			element = element.replace(element.substring(element.indexOf("<img"), element.indexOf(">", element.indexOf("<img"))+1), "");

		while(element.indexOf("<iframe") != -1)
			element = element.replace(element.substring(element.indexOf("<iframe"), element.indexOf("</iframe>")+9), "");

		while(element.indexOf("<video") != -1)
			element = element.replace(element.substring(element.indexOf("<video"), element.indexOf("</video>")+8), "");

		while(element.indexOf("<audio") != -1)
			element = element.replace(element.substring(element.indexOf("<audio"), element.indexOf("</audio>")+8), "");

		while(element.indexOf("<object") != -1)
			element = element.replace(element.substring(element.indexOf("<object"), element.indexOf("</object>")+9), "");
	}catch(e){}
	return element;
}

/**
 * This method is responsible for processing Text blocks
 * It creates an span element and insert it into a section
 * Before it process and delete images inside the text
 * @param  {String} content of the element
 * @param  {String} width of the element
 * @param  {String} height of the element
 * @param  {String} top of the element
 * @param  {String} left of the element
 * @param  {String} path of the imported project
 * @param  {String} id of section selected
 */
function processTextBlock(textValue, width, height, top, left, filePath, idsectionselected){

	var backend = application.backend.core.getInstance();

	textValue = extractElements(textValue, filePath, idsectionselected);
	var auxNode = $('<SPAN></SPAN>');
	auxNode.innerHTML = textValue;
	auxNode.tagName = 'SPAN';
	auxNode.clientWidth = width;
	auxNode.clientHeight = height;
	auxNode.offsetTop = top;
	auxNode.offsetLeft = left;
	processElementBlock(auxNode, filePath, idsectionselected)
}

/**
 * This method is responsible for processing element blocks
 * It searches the element and inserts it into a section
 * @param  {Object} node to be processed
 * @param  {String} path of the html element
 * @param  {String} id of section selected
 */
function processElementBlock(node, filePath, idsectionselected)
{
	var candidates = getHTMLTags(node);
	var backend = application.backend.core.getInstance();

	if(candidates.length > 0)
	{
		debugger;
		var element = new Cloudbook.Actions[candidates[0]]['component']();
		if(Cloudbook.Actions[candidates[0]].path.indexOf("core/text") != -1)
			node = extractElements(node, filePath, idsectionselected);
		element.importHTML(node, filePath);
		backend.appendCBObjectIntoSection(element, idsectionselected);
	}
}

function checkOnlyTextNodes(node){
	debugger;
	var ignoreNodes = [2,4,5,6,7,8,10,12];
	if(ignoreNodes.indexOf(node.nodeType) >= 0 || node.nodeType === 3 ) return true;
	var listNodes = node.childNodes;
	var i;
	if (listNodes.length === 0) return false;
	for(i = 0; i < listNodes.length ; i++){
		if (!checkOnlyTextNodes(listNodes[i])) return false;
	}
	return true;
}


/**
 * This method is responsible for reading block elements
 * It creates an element and inserts it into a section
 * @param  {String} content of the HTML file
 * @param  {String} path of the html element
 * @param  {String} name of block element
 * @param  {String} id of section selected
 * @param  {Object} element to share data
 */
ImportHTML.prototype.processBlock = function processBlock(element, filePath, blockName, idsectionselected) {
	var candidates;
	var backend = application.backend.core.getInstance();
	var node;
	for(node = element.firstChild; node; node = node.nextSibling){
		candidates = [];
	}
};






function processBlock(element, filePath, blockName, idsectionselected,that)
{
	var candidates;
	var backend = application.backend.core.getInstance();
	for(var node = element.firstChild; node; node = node.nextSibling){
		candidates = [];
		if(node.tagName !== undefined)
		{
			switch(node.tagName)
			{
				case "SECTION":case "ARTICLE":case "NAV":case "DIV": case "ASIDE":case "MAIN":
					var elementPosition = node.getBoundingClientRect();
					var width = elementPosition.width;
				    var height = elementPosition.height;
				    var left = elementPosition.left;
				    var top = elementPosition.top;
				    var text = "";
				    debugger;
					text = processBlock(node, filePath, node.tagName,idsectionselected,that);
					if(node.parentElement.tagName =="HEADER" || node.parentElement.tagName =="FOOTER" ||
						node.parentElement.nodeName == "BODY" || (node.parentElement.parentElement != null && 
							node.parentElement.parentElement.nodeName == "BODY") || (node.parentElement.parentElement != null &&
					    node.parentElement.parentNode.nodeName == "HTML") || node.parentElement.tagName =="HTML")
					{
						if(text != ""){
							processTextBlock(text, width, height, top, left, filePath, idsectionselected);
							that.blockText = document.createElement("div");
							text = "";
						}
					}
				break;
				case "HEADER": case "FOOTER":
					processBlock(node, filePath, null,idsectionselected,that);
				break;
				default:
					if( ($.inArray(node.tagName,that.textCandidates) > -1 )&& (blockName != null))
					{
						if(node.children.length ==1 && node.children[0].nodeName == "IMG" && node.childNodes.length == 1)
							processElementBlock(node.children[0], filePath, idsectionselected);
						else
							that.blockText.appendChild(node);
					}
					else
					{
						if(node.children.length ==1 && node.children[0].nodeName == "IMG" && node.childNodes.length == 1)
							processElementBlock(node.children[0], filePath, idsectionselected);
						else
							processElementBlock(node, filePath, idsectionselected);
					}
				break;
			}
		}
		else
		{
			if(node.nodeType != 8 && node.nodeValue.trim().length > 0)
			{
				if(blockName != null){
					var auxNode = document.createElement('span');
					auxNode.innerHTML = node.nodeValue;
					that.blockText.appendChild(auxNode);
					that.blockText.appendChild(document.createElement('br'));
				}
				else
				{
					processTextBlock(node.nodeValue, width, height, top, left, filePath, idsectionselected);
					that.blockText = document.createElement('div');
					text = "";
				}
			}
		}
	}
	if(blockName != null)
		return that.blockText;
}
/**
 * This method is responsible for reading HTML main block contents
 * It creates one div and one iframe to load content and process content, 
 * finally removes two elements and loads content of selected section.
 * Content depends on the anchor and if there is, takes the section
 * @param  {String} content of the HTML file
 * @param  {String} path of the html element
 * @param  {String} id of section selected
 * @param  {Object} a JSON object with additional options
 */
ImportHTML.prototype.processHTML = function processHTML(data, filePath, idsectionselected,options)
{
	var _this = this,
		opt = $.extend({},options),
		controller = application.controller.getInstance(),
		ui = application.ui.core.getInstance(),
		invisibleFramework,
		contentToProcess;

//	setTimeout(function(){
	invisibleFramework = _this.createInvisibleFramework(data);
	contentToProcess = _this.getContentFromHTML(invisibleFramework,options);
	_this.processBlock(contentToProcess,filePath, null,idsectionselected);
	_this.destroyInvisibleFramework(invisibleFramework);
	ui.loadContent(Cloudbook.UI.selected.attr('data-cbsectionid'));
//	}, 500);
	controller.renumberProject();

}

ImportHTML.prototype.getContentFromHTML = function(invisibleFramework, options) {
	var contenttoprocess;
	var contentFiltredBySelector = invisibleFramework.contents().find(options.idtoprocess)[0];
	var allContentFromInvisibleFramework = invisibleFramework.contents().get()[0].children[0];
    if (options) {
        if (options.idtoprocess) {
            if (invisibleFramework.contents().find(options.idtoprocess)[0] === undefined) {
                if (data.indexOf(options.idtoprocess.replace("#", "")) !== -1) {
                    contenttoprocess = allContentFromInvisibleFramework;
                }
            } else {
                contenttoprocess = invisibleFramework.contents().find(options.idtoprocess)[0];
            }
        }
        if (options.isELP) {
            contenttoprocess = allContentFromInvisibleFramework.childNodes[1];
        }
    } else {
        if (invisibleFramework.contents().find("body").length === 0) {
            contenttoprocess = allContentFromInvisibleFramework;
        } else {
            contenttoprocess = allContentFromInvisibleFramework.childNodes[2];
        }
    }
    return contenttoprocess;
};


ImportHTML.prototype.createInvisibleFramework = function createInvisibleFramework(data) {
	var invisibleFramework = document.createElement('div'),
		contentLayer = document.createElement('iframe'),
		blankLayer = document.createElement('div');

	invisibleFramework.style.width = "100%";
	invisibleFramework.style.height = "100%";
	invisibleFramework.style.position = "fixed";
	invisibleFramework.style.zIndex = "-1000";
	
	contentLayer.style.width = "100%";
	contentLayer.style.height = "100%";
	contentLayer.style.zIndex = "1";

	blankLayer.style.width = "100%";
	blankLayer.style.height = "100%";
	blankLayer.style.zIndex = "3";

	invisibleFramework.appendChild(contentLayer);
	invisibleFramework.appendChild(blankLayer);

	document.querySelector('body').appendChild(invisibleFramework);
    contentLayer.contentDocument.querySelector('html').innerHTML = data;

    return invisibleFramework;
};

ImportHTML.prototype.destroyInvisibleFramework = function destroyInvisibleFramework(invisibleFramework) {
	invisibleFramework.remove();
};
CBUtil.createNameSpace('application.importhtml');
application.importhtml = CBUtil.singleton(ImportHTML);