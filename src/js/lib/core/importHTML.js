/**
 * @class ImportHTML
 * @classdesc This class is responsible to make import operations of HTML Files
 * it loads TextTags
 */
function ImportHTML(){
}

/**
 * This method is responsible for getting tags for each component
 * @param  {Object} node which tag is to be found
 * @result  {Object[]} array of possible candidates
 */
ImportHTML.prototype.getCandidateForNode = function getCandidateForNode(node) {
	var identifierActions = Object.keys(Cloudbook.Actions),
		score = 0,
		candidate = null,
		scoreElement,
		tempActionObject;

	identifierActions.forEach(function(keyAction){
		tempActionObject = new Cloudbook.Actions[keyAction]['component'](); 
		scoreElement = tempActionObject.HTMLtags(node);
		if(score < scoreElement){  
			candidate = keyAction;
			score = scoreElement;
		}
	});
	return candidate;
}

/**
 * This method is responsible for getting tags for text component
 * @param  {String} tag to be found
 * @result  {Object[]} array of possible candidates
 */
ImportHTML.prototype.getTextCandidate = function getTextCandidate() {

	var identifierActions = Object.keys(Cloudbook.Actions),
		candidate = null;

	identifierActions.forEach(function(keyAction){
		if(Cloudbook.Actions[keyAction]['path'] ==='components/core/text') candidate = keyAction; 
	});
	return candidate;
}


function checkOnlyTextNodes(node){
	debugger;
	var ignoreNodes = [2,4,5,6,7,8,10,12];
	if(ignoreNodes.indexOf(node.nodeType) >= 0 || node.nodeType === 3 ) return true;
	if(node.nodeType === 9 || node.nodeType === 11 ) return checkOnlyTextNodes(node);
	var tagsValidVoid = ['a','abbr','acronym','address','article','aside','b','bdi','bdo',
						 'big','blockquote','body','br','caption','center','cite','code','col',
						 'datalist','dd','del','details','dfn','dialog','dir','div','dl','dt',
						 'em','fieldset','figcaption','figure','font','footer','form','h1','h2',
						 'h3','h4','h5','h6','head','header','hr','html','i','input','ins','kbd',
						 'keygen','label','legend','li','main','mark','meter','nav','noframes',
						 'ol','optgroup','option','output','p','pre','progress','q','rp','rt',
						 'ruby','s','samp','section','select','small','span','strike','strong',
						 'sub','summary','sup','table','tbody','td','textarea','tfoot','th',
						 'thead','time','title','tr','track','tt','u','ul','var','wbr'];
	var invalidTags = ['table','tr'];
	if(invalidTags.indexOf(node.tagName.toLowerCase())) return false;
	if(tagsValidVoid.indexOf(node.tagName.toLowerCase()) >= 0 & node.innerHTML === "") return true;
	if(node.childNodes === 0) return false;
	for(var i = 0; i < node.childNodes.length ; i++){
		if(!checkOnlyTextNodes(node.childNodes[i])) return false;
	}
	return true;
	//bucle que recorre todos los hijos y comprueba si alguno no es texto

	// 1 Elements node
}

/**
 * This method is responsible for processing element blocks
 * It searches the element and inserts it into a section
 * @param  {Object} node to be processed
 * @param  {String} path of the html element
 * @param  {String} id of section selected
 */
ImportHTML.prototype.importNode = function importNode(node, candidate, filePath, idsectionselected) {
	
	var backend = application.backend.core.getInstance();
	var element = new Cloudbook.Actions[candidate]['component']();
	element.importHTML(node, filePath);
	backend.appendCBObjectIntoSection(element, idsectionselected);
}

ImportHTML.prototype.importRawTextNode = function(node,idsectionselected) {
	var backend = application.backend.core.getInstance();
	var element = new Cloudbook.Actions[this.getTextCandidate()]['component']();
	if(node.data.trim() !== ''){
		element.importHTMLRaw(node);
		backend.appendCBObjectIntoSection(element,idsectionselected);
	}
};

ImportHTML.prototype.processBlock = function processBlock(element, filePath, idsectionselected) {
	var backend = application.backend.core.getInstance();
	var ignoreNodes = [2,4,5,6,7,8,10,12];
	var node;
	var candidate;
	for(node = element.firstChild; node; node = node.nextSibling){
		
		if(ignoreNodes.indexOf(node.nodeType) >= 0) continue;

		if(node.nodeType === 9 || node.nodeType === 11 ){
			this.processBlock(node,filePath,idsectionselected);
			continue;	
		}

		if(node.nodeType === 3){
			this.importRawTextNode(node, idsectionselected);
			continue;	
		}
		// 1 Element Node
		
		// Search candidate to create element
		// If candidate isn't null create this element
		candidate = this.getCandidateForNode(node);
		
		if(candidate === null && checkOnlyTextNodes(node)) candidate = this.getTextCandidate();

		if (candidate !== null){
			this.importNode(node,candidate,filePath,idsectionselected);
			continue;
		}
		// default call process Block
		this.processBlock(node,filePath,idsectionselected);
	}
};

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
	_this.processBlock(contentToProcess,filePath, idsectionselected);
	_this.destroyInvisibleFramework(invisibleFramework);
	ui.loadContent(Cloudbook.UI.selected.attr('data-cbsectionid'));
//	}, 500);
	controller.renumberProject();

}

ImportHTML.prototype.getContentFromHTML = function(invisibleFramework, options) {
	var contenttoprocess;
	var contentFromInvisibleFramework = $(invisibleFramework).children('iframe');
	var contentFiltredBySelector = contentFromInvisibleFramework.contents().find(options.idtoprocess)[0];
	var allContentFromInvisibleFramework = contentFromInvisibleFramework.contents().get()[0].children[0];
    if (options) {
        if (options.idtoprocess) {
            if (contentFromInvisibleFramework.contents().find(options.idtoprocess)[0] === undefined) {
                if (data.indexOf(options.idtoprocess.replace("#", "")) !== -1) {
                    contenttoprocess = allContentFromInvisibleFramework;
                }
            } else {
                contenttoprocess = contentFromInvisibleFramework.contents().find(options.idtoprocess)[0];
            }
        }
        if (options.isELP) {
            contenttoprocess = allContentFromInvisibleFramework.childNodes[1];
        }
    } else {
        if (contentFromInvisibleFramework.contents().find("body").length === 0) {
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