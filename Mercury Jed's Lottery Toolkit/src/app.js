export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
          { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
          { route: 'text-to-number',         name: 'text-to-number',        moduleId: 'text_to_num',        nav: true, title: 'Text to Number Convertor' }
          // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
        ]);

        this.router = router;
    }
}
