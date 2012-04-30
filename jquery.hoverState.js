/*
* hoverState, A handy jQuery plugin that preloads your images hover state, then displays it "onHover"
* Instructions: http://www.springload.co.nz/love-the-web/hoverstatejs-another-jquery-plugin
* By: James Player, http://springload.co.nz
* Version: 1.1
* Updated: November 25, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
;(function($, window, document, undefined) {

    // Plugin by James Player
    // springload.co.nz

    var pluginName = 'hoverState',
        defaults = {
            hoverExt: "-on"
        };

    var preload_cache = [];

    // Plugin constructor
    function Plugin (element, options) {
        this.element = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function() {

        var src = this.element.attr('src');

        // Make sure the element actually has a src attr
        if (src) {

            // Split the src into filename and extension
            var parts = src.match(/^(.+)(\.[^.]+)$/i);

            // Make sure we have a valid filename
            if (parts.length == 3) {

                // Create new image element
                var cacheImg = document.createElement('img');

                // Add hoverExt (default '-on') to the new image filename
                var preLoadPath = parts[1] + this.options.hoverExt + parts[2];

                // Set the image src
                cacheImg.src = preLoadPath;

                // Store this image so the browser doesn't download it again
                preload_cache.push(cacheImg);

                // Add hover event
                this.element.hover(
                    function() {
                        $(this).attr('src', preLoadPath);
                    },
                    function() {
                        $(this).attr('src', src);
                    }
                );

            }
        }
    }

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    }

})(jQuery, window, document);
