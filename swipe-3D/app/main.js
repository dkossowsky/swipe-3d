require([
  "esri/WebScene",
  "esri/views/SceneView",
  "app/swiper",
  "app/syncUtil"
], function (WebScene, SceneView, swiper, syncUtil) {

  swiper.init();
  // Your scene on the left
  var websceneTop = new WebScene({
   portalItem: {
     id: "0886807a10c849468a9bc8debd98479c"
   }
  });
  // Your scene on the right
  var websceneBottom = new WebScene({
    portalItem: {
      id: "fc9f85c9bdb040dfb1030b3e87cd2da5"
    }
  });

  var viewTop = new SceneView({
    container: "viewTop",
    map: websceneTop,
    environment: {
      lighting: {
        directShadowsEnabled: true,
        ambientOcclusionEnabled: false
      }
    }
  });

  var viewBottom = new SceneView({
    container: "viewBottom",
    map: websceneBottom,
    environment: {
      lighting: {
        directShadowsEnabled: true,
        ambientOcclusionEnabled: false
      }
    }
  });

  // Clear the top-left corner to make place for the title
  viewTop.ui.empty("top-left");
  viewBottom.ui.empty("top-left");

  // synchronize the two views
  syncUtil.syncViews(viewTop, viewBottom);

});
