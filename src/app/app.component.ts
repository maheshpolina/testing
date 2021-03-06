import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: `
  //   <div>
  //       <nav class='navbar navbar-default'>
  //           <div class='container-fluid'>
  //               <a class='navbar-brand'>{{pageTitle}}</a>
  //               <ul class='nav navbar-nav'>
  //                   <li><a [routerLink]="['/welcome']">Home</a></li>
  //                   <li><a [routerLink]="['/products']">Product List</a></li>
  //               </ul>
  //           </div>
  //       </nav>
  //       <div class='container'>
  //           <router-outlet></router-outlet>
  //       </div>
  //    </div>
  //   `
})
export class AppComponent implements OnInit{

  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredApps = this.listFilter ? this.performFilter(this.listFilter) : this.apps;
  }
  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.apps.filter((app: any) =>
          app.app.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit(): void {
    this.performFilter
  }
  title = 'Console URLs';
  searchText = ''
  filteredApps = []
  apps = [{
    'name': 'Service 2.0',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'https://cvyhj1a01v:8889/esb/mule/svc20/console/'
    },
    {
      'envi':'uat',
      'Name':'UAT',
      'url': "http://cvyhj1a02v:8889/esb/mule/svc20/console/"
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': null,
    },{
      'envi':'prod',
      'Name': 'Production',
      'url': null
    }
    ]
  },
  {
    'name': 'SAP Api',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:9999/mule/sap/rest/console/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': "http://cvyhj1a02v:9999/mule/sap/rest/console/"
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:9999/mule/sap/rest/console/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:9999/mule/sap/rest/console/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:9999/mule/sap/rest/console/"
    }
    ]
  },
  {
    'name': 'MSG Api',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:9999/mule/msg/rest/console/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': null
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:9999/mule/msg/rest/console/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:9999/mule/msg/rest/console/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:9999/mule/msg/rest/console/"
    }
    ]
  },
  {
    'name': 'AM SAP Api',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:8889/esb/mule/api/am/console/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': null
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:8889/esb/mule/api/am/console/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:8889/esb/mule/api/am/console/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:8889/esb/mule/api/am/console/"
    }
    ]
  },
  {
    'name': 'AM SFDC Api',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:8889/esb/mule/api/am/sfdc/console/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': null
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:8889/esb/mule/api/am/sfdc/console/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:8889/esb/mule/api/am/sfdc/console/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:8889/esb/mule/api/am/sfdc/console/"
    }
    ]
  },
  {
    'name': 'CPG Api',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:9999/mule/cpg/rest/console/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': null
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:8889/mule/cpg/rest/console/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:9999/mule/cpg/rest/console/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:9999/mule/cpg/rest/console/"
    }
    ]
  },
  {
    'name': 'WS Stack',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:9999/console/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': null
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:9999/console/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:9999/console/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:9999/console/"
    }
    ]
  },
  {
    'name': 'WSSP',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://wsdev:8080/wssp'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': null
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': null,
    },{
      'envi':'prod',
      'Name': 'Production',
      'url': "https://wssp.olympusamerica.com/"
    }
    ]
  },
  {
    'name': 'Shark SAP Api',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:9999/mule/sharksap/rest/console/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': null
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:9999/mule/sharksap/rest/console/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:9999/mule/sharksap/rest/console/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:9999/mule/sharksap/rest/console/"
    }
    ]
  },
  {
    'name': 'WMIS Api',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:9998/esb/mule/api/wmis/wmiconsole/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': "http://cvyhj1a02v:9998/esb/mule/api/wmis/wmiconsole/"
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:9998/esb/mule/api/wmis/wmiconsole/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:9998/esb/mule/api/wmis/wmiconsole/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:9998/esb/mule/api/wmis/wmiconsole/"
    }
    ]
  },
  {
    'name': 'WMIS SAP Api',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:9998/esb/mule/api/wmis/sapconsole/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': "http://cvyhj1a02v:9998/esb/mule/api/wmis/sapconsole/"
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:9998/esb/mule/api/wmis/sapconsole/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:9998/esb/mule/api/wmis/sapconsole/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:9998/esb/mule/api/wmis/sapconsole/"
    }
    ]
  },
  {
    'name': 'WMIS Visual Api',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a01v:9998/esb/mule/api/wmis/visualconsole/'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': "http://cvyhj1a02v:9998/esb/mule/api/wmis/visualconsole/"
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': "http://cvyhj1a06v:9998/esb/mule/api/wmis/visualconsole/",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      //'url': "http://cvyhj3a01v:9998/esb/mule/api/wmis/visualconsole/"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      //'url': "http://cvyhj3a02v:9998/esb/mule/api/wmis/visualconsole/"
    }
    ]
  },
  {
    'name': 'MQ',
    'urls':[{
      'envi':'dev',
      'Name': 'Non Prod 1',
      'url': 'http://cvyhj1a01v:8161/admin/queues.jsp'
    },
    {
      'envi':'dev',
      'Name': 'Non Prod 2',
      'url': "http://cvyhj1a02v:8161/admin/queues.jsp"
    },{
      'envi':'dev',
      'Name': 'Non Prod 6',
      'url': "http://cvyhj1a06v:8161/admin/queues.jsp",
    },{
      'envi':'prod',
      'Name': 'Production 1',
      'url': "http://cvyhj3a01v:8161/admin/queues.jsp"
    },{
      'envi':'prod',
      'Name': 'Production 2',
      'url': "http://cvyhj3a02v:8161/admin/queues.jsp"
    },{
      'envi':'prod',
      'Name': 'Production 5',
      'url': "http://cvyhj3a05v:8161/admin/queues.jsp"
    }
    ]
  },
  {
    'name': 'Splunk',
    'urls':[{
      'envi':'dev',
      'Name': 'Dev',
      'url': 'http://cvyhj1a08v:8000'
    },
    {
      'envi':'uat',
      'Name': 'UAT',
      'url': null
    },{
      'envi':'stage',
      'Name': 'Staging',
      'url': null,
    },{
      'envi':'prod',
      'Name': 'Production',
      'url': "http://cvyhj3311v:8000"
    }
    ]
  },
  {
    'name': 'Miscellaneous',
    'urls':[{
      'envi':'prod',
      'Name': 'Jenkins',
      'url': 'http://cvyhj3a04v:8081'
    },
    {
      'envi':'prod',
      'Name': 'TPM',
      'url': "https://tpm.oai.olympusglobal.com/index.php"
    },{
      'envi':'prod',
      'Name': 'Wiki',
      'url': "https://wiki-ea.oai.olympusglobal.com/index.php",
    }
    ]
  }]
}
