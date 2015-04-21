var Project = window.Project;
var util = require('util');
var CBobject = CBUtil.req("js/lib/core/components/cbobject.js");
var metadata = require( "./"+__module_path__ + 'metadata.json');

function FlashBox(objectdata){
  objectdata = typeof objectdata !== 'undefined' ? objectdata : {"resourcepath":null, "position" : [200,200], "size":[250,100]};
  objectdata.idtype = metadata['idtype'];
  FlashBox.super_.call(this,objectdata);
  this.resourcepath = objectdata.resourcepath;
}

util.inherits(FlashBox,CBobject);

FlashBox.prototype.editorView = function editorView() {
  var aux = FlashBox.super_.prototype.editorView.call(this);
  var flashelement = $(window.document.createElement('object')).attr('type','application/x-shockwave-flash').attr('data',Project.Info.projectpath + "/rsrc/"+ this.resourcepath);
  var params = [];
  params.push($(window.document.createElement('param')).attr('name','movie').attr('value',this.resourcepath));
  params.push($(window.document.createElement('param')).attr('name','quality').attr('value','high'));
  params.push($(window.document.createElement('param')).attr('name','scale').attr('value','exactfit'));
  params.push($(window.document.createElement('param')).attr('name','base').attr('value','.'));

  flashelement.css('height','100%');
  flashelement.css('width','100%');
  flashelement.append(params);
  aux.children('.cbcontainer').append(flashelement);
  return aux;
};

FlashBox.prototype.clickButton = function clickButton(controllerClass) {
  var that = this;
  var dialog = $("<div id='flashdialog'><input id='flashpath' type='file' accept='.swf,.flv' /><button id='action'>Insert</button></div>");
  dialog.children('#action').click(function(){
    updateFlashPath(dialog,that);
  });
  dialog.dialog({modal:true,close:function(){$(this).remove()}});
  $("#flashdialog button").on('click',function(){controllerClass.addCBObjectIntoSelectedSection(that.editorView(),that);dialog.dialog('close')});
};

FlashBox.prototype.HTMLtags = function HTMLtags(node){
  var score = 0;
  var tagTypes = {tags: ['OBJECT','EMBED']};
  
  if(tagTypes.tags.indexOf(node.tagName) > -1) score ++;

  return score;

  //return ['OBJECT','EMBED'];
}

FlashBox.prototype.importHTML = function importHTML(node, filePath){

  var fs = require('fs-extra');
  var path = require('path');
  var resourcepath = "";
    try{
      
      if(node.tagName == "OBJECT")
        resourcepath = node.attributes.getNamedItem("data") != null? node.attributes.getNamedItem("data").value:"";
      if(node.tagName == "EMBED")
        resourcepath = node.attributes.getNamedItem("src") != null? node.attributes.getNamedItem("src").value:"";

      var basename = path.basename(resourcepath);
      var sourcePath = path.join(Project.Info.projectpath, "/rsrc/", basename);
      while(true){
        if(!fs.existsSync(sourcePath)){
            break;
        }
        basename = 0 + basename;
        sourcePath = path.join(Project.Info.projectpath, "/rsrc/", basename);
      }

        //fs.renameSync(sourcePath, path.join(Project.Info.projectpath, "/rsrc/", path.basename(imgpath).replace(".", Date.now().toString() + ".")));
      fs.copySync(path.join(path.dirname(filePath), resourcepath),sourcePath);
      var width = node.clientWidth;
      var height = node.clientHeight;
      var left = node.offsetLeft;
      var top = node.offsetTop;
      this.position = [left, top];
      this.resourcepath = basename;
      if(width != 0 && height != 0)
        this.size = [width,height];
    }
    catch (err) {
        console.log('Errors in flash ' + err);
    }
}

FlashBox.prototype.triggerAddEditorView = function triggerAddEditorView(jquerycbo,objectcbo) {
  FlashBox.super_.prototype.triggerAddEditorView.call(this,jquerycbo,objectcbo);
};


function updateFlashPath(dialog,that){
    var fs = window.require('fs');
    var fsextra = window.require('fs-extra');
    var path = window.require('path');
    /*
     * get new file path
     */
    var dialogHTMLRaw = dialog.get()[0];
    var result = dialogHTMLRaw.querySelectorAll('#flashpath');
    var originalpath = result[0].value;

    /*
     * Copy file to workspace
     */

    var originalbasename = path.basename(originalpath);
    var finalpath = Project.Info.projectpath +"/rsrc/"+originalbasename;
    while(true){
      try{
        fs.accessSync(finalpath);
        originalbasename = "0"+originalbasename;
        finalpath = Project.Info.projectpath + "/rsrc/"+ originalbasename;
      }
      catch(e){
        break;
      }
    }
    fsextra.copySync(originalpath,finalpath);
    /*
     * update component file
     */
    that.resourcepath = originalbasename;
}



//FlashBox.triggerAddEditorView =  CBobject.triggerAddEditorView;
/*
exports.add = function add() {
  return new FlashBox();
};

exports.restore = function restore(objectdata) {
  return new FlashBox(objectdata);
};
*/

module.exports = FlashBox;