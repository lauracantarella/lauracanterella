const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const Image = require("@11ty/eleventy-img");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const implicitFigures = require('markdown-it-image-figures');
const markdownItAttrs = require('markdown-it-attrs');






module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/_static");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/*.pdf");
    eleventyConfig.addPassthroughCopy('src/robots.txt' );


    eleventyConfig.addCollection("project_en", function (collection) {
        return collection.getFilteredByGlob("./src/en/projects/*.md");
      });

      eleventyConfig.addCollection("project_it", function (collection) {
        return collection.getFilteredByGlob("./src/it/projects/*.md");
      });


    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        // any valid BCP 47-compatible language tag is supported
        defaultLanguage: "it", // Required, this site uses "en"
         // Rename the default universal filter names
        filters: {
            // transform a URL with the current page’s locale code
            url: "locale_url",
    
            // find the other localized content for a specific input file
            links: "locale_links",
        },
    
        // When to throw errors for missing localized content files
        errorMode: "strict", // throw an error if content is missing at /en/slug
        // errorMode: "allow-fallback", // only throw an error when the content is missing at both /en/slug and /slug
        // errorMode: "never", // don’t throw errors for missing content
    });
    ///IMAGE PROCESSING-------------------------------------------
    //image background-------------------------------------------
    eleventyConfig.addShortcode("imagebg", async function(src, w) {
        source= "src"+src;
		let metadata = await Image(source, {
			widths: [w], 
			formats: ["webp"],
            sharpWebpOptions: {
                quality: 90
            },
            outputDir: "./_site/_static/images/compressed/",
            urlPath: "/_static/images/compressed/",
            useCache: true
		});

		let data = metadata.webp[metadata.webp.length - 1];
		return `${data.url}`;
    });
    //image-main
    eleventyConfig.addShortcode("imagefit", async function(src, alt, sizes) {
        source= "src" +src;
        //console.log("SOURCE", source, src)
        let metadata = await Image(source, {
			widths: [ 800, 1280, 1920],
			formats: ["webp", "jpeg"],
            sharpWebpOptions: {
                quality: 85
            },
            sharpJpegOptions: {
                quality: 70
            },
            outputDir: "./_site/_static/images/compressed/",
            urlPath: "/_static/images/compressed/",
            useCache: true
		});

		let imageAttributes = {
			alt, 
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	});




    //FILTERS-------------------------------------------
    //TEMPLATING FILTERS 

    //changing date formats 
    eleventyConfig.addFilter("readableDate", dateObj => {
        newdate = new Date(dateObj);
        return DateTime.fromJSDate(newdate, { zone: 'utc' }).toFormat("dd mmmyyyy");
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if (!Array.isArray(array) || array.length === 0) {
            return [];
        }
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    function sortByOrder(values) {
        let vals = [...values]; // this *seems* to prevent collection mutation...
        return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
    }

    eleventyConfig.addFilter("sortByOrder", sortByOrder);

    //FILTERS MARKDOWN-------------------
    eleventyConfig.addFilter("in_markdownify", (markdownString) =>
        markdownLibrary.renderInline(markdownString)
    );
    eleventyConfig.addFilter("markdownify", (markdownString) =>
        markdownLibrary.render(markdownString)
    );

    // Customize Markdown library and settings:

    let markdownLibrary = markdownIt({
        html: true,
        linkify: true,
        typographer: true
    })

    .use(implicitFigures, {
            dataType: true,
            figcaption: "title"
        })
        .use(markdownItAttrs);

    eleventyConfig.setLibrary("md", markdownLibrary);

    eleventyConfig.setServerOptions({
        module: "@11ty/eleventy-server-browsersync",
    
        // Default Browsersync options shown:
        port: 8082,
        open: true,
        notify: true,
        ui: false,
        ghostMode: true,
    
        // Opt-out of the Browsersync snippet
        snippet: false,
      })
    

    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid"
        ],

        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: "njk",

        // -----------------------------------------------------------------
        // If your site deploys to a subdirectory, change `pathPrefix`.
        // Don’t worry about leading and trailing slashes, we normalize these.

        // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
        // This is only used for link URLs (it does not affect your file structure)
        // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

        // You can also pass this in on the command line using `--pathprefix`

        // Optional (default is shown)
        //pathPrefix: "/",
        // -----------------------------------------------------------------


        // These are all optional (defaults are shown):
        dir: {
            input: "src",
            static: "_static", //assets copy pass through
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};