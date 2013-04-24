## Patsy-quickstart

#### A boilerplate project for [Patsy](http://github.com/phun-ky/patsy) with patsy.json + filetree ready to go.

Requirements:
- A shell (config currently set up for unix-style paths)
- [Node + npm](http://nodejs.org/), [bower](https://github.com/twitter/bower) (npm install -g bower)

**Quickstart:**
- `npm install -g patsy` if you haven't done that already
- `git clone git@github.com:nilsel/patsy-quickstart.git`
- `cd patsy-quickstart`
- `bower install bootstrap` creates "components" folder in project root, jQuery is included
- edit `patsy.json`, update the abs_path to match your setup
- run `patsy`
- Point your browser to [http://localhost:8080/](http://localhost:8080/)

## TODO:
- Make JS documentation-generation work
- Fix proxy-config (currently uses static data)
- More examples (dev vs production configuration), even better documentation ;)
