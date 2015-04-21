var Project = window.Project;
var util = require('util');
var CBobject = CBUtil.req("js/lib/core/components/cbobject.js");
var metadata = require( "./"+__module_path__ + 'metadata.json');

function ExternalIframe(objectdata){
  objectdata = typeof objectdata !== 'undefined' ? objectdata : {"url":null, "position" : [200,200],"size":[100,50]};
  objectdata.idtype = metadata['idtype'];
  ExternalIframe.super_.call(this,objectdata);
  this.url = objectdata.url;
}

util.inherits(ExternalIframe,CBobject);

ExternalIframe.prototype.editorView = function editorView() {
  var aux = ExternalIframe.super_.prototype.editorView.call(this);
  var url = this.url !== null ? this.url : "http://lliurex.net";
  var imgelement = $(window.document.createElement('iframe')).attr('src', url);
  imgelement.css('height','100%');
  imgelement.css('width','100%');
  aux.children('.cbcontainer').append(imgelement);
  return aux;
};

ExternalIframe.prototype.HTMLtags = function HTMLtags(node){
  var score = 0;
  var tagTypes = {tags: ['IFRAME']};
  
  if(tagTypes.tags.indexOf(node.tagName) > -1)
  {
    score ++;
    if(node.attributes.getNamedItem("src") != null)
      if(node.attributes.getNamedItem("src").value.indexOf("youtube") == -1) score++;
  } 
  return score;

//  return ['IFRAME'];
}

ExternalIframe.prototype.importHTML = function importHTML(node, filePath){
    try{
      
      var urlpath = node.attributes.getNamedItem("src") != null? node.attributes.getNamedItem("src").value:"";
      var width = node.clientWidth;
      var height = node.clientHeight;
      var left = node.offsetLeft;
      var top = node.offsetTop;
      this.position = [left, top];
      if(width != 0 && height != 0)
          this.size = [width,height];
        else
        {
          if(node.hasAttributes())
          {
            if(node.attributes['width'] != undefined) 
              width = node.attributes['width'].nodeValue;
            if(node.attributes['height'] != undefined)
              height = node.attributes['height'].nodeValue;   
            if(width != 0 && height != 0)
              this.size = [width,height];
          }
        }
      this.url = urlpath;
    }
    catch (err) {
        console.log('Errors in ExternalIframe');
    }
}

ExternalIframe.prototype.triggerAddEditorView = function triggerAddEditorView(jquerycbo,objectcbo) {
  ExternalIframe.super_.prototype.triggerAddEditorView.call(this,jquerycbo,objectcbo);
};

ExternalIframe.prototype.clickButton = function clickButton(controllerClass) {
  var that = this;
  var dialog = $("<div id='imagedialog'><input id='url' type='text'/><button id='save'>Insert</button></div>");
  dialog.dialog({modal:true,close:function(){$(this).remove()}});
  dialog.find('#url').keypress(function(e){
      if (e.which==13){
        var seccion = $('#url').val();
        if(seccion!=""){ 
          dialog.find('#save').click();
        }
      }
  });
  $("#imagedialog button").on('click',function(){
    that.url = $("#url").val();
    controllerClass.addCBObjectIntoSelectedSection(that.editorView(),that);dialog.dialog('close')});
};


ExternalIframe.prototype.editButton = function editButton(e) {
  var dialog = ExternalIframe.super_.prototype.editButton.call(this,e);
  var that = e.data.that;

  dialog.append("<input id='url' type='text' value='"+that.url+"'/>");
};

//ExternalIframe.triggerAddEditorView =  CBobject.triggerAddEditorView;
/*
exports.add = function add() {
  return new ExternalIframe();
};

exports.restore = function restore(objectdata) {
  return new ExternalIframe(objectdata);
};
*/
module.exports = ExternalIframe;