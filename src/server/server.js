var express = require('express');
    app = express();
    fs = require('fs');
    cradle = require('cradle');
    db;
    DBNAME = 'dtf';
// Simple route display text 
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Works!');
});


// Simple route serves a static json file
app.get('/colorcodes', function(req, res){
        fs.readFile('./static_data/colorcodes.json', function(err,data){
                    var head = 200;
                    if (err){
                        head = 400;
                        data = JSON.stringify(err);
                    }
                    res.writeHead(head);
                    res.end(data);
        });
});
// cradle global config
cradle.setup({
    host: '127.0.0.1:5984',
    cache: true,
    raw: false
});

db = new (cradle.Connection)().database(DBNAME);

//TODO List

//default landing page
app.get('/', function(req, res){
   db.get( 
});
//shows top n Number of reports. Contains last 10 uploaded
app.get('/top',function(){});
//List all project status metadata
app.get('/projectstatus', function(){});
//List all weekly status metadata
app.get('/weeklystatus', function(){});
//Pull details of top project status
app.get('/projectstatus/top', function(){});
//Pull details of top weekly status
app.get('/weeklystatus/top',function(){});

//////////////////////////////////////////////////////////////////////
// $app->get('/', 'getLastReports');

// routes from FTD
// Upload data from UNANET
// $app->post('/upload', 'uploadFile');
// //$app->post('/projectstatus', 'addProjectStatus');
//
// //default report
// $app->get('/', 'getLastReports');
// $app->get('/top', 'getLastAddedReport');
// $app->get('/top/projectstatus', 'getLastAddedProjectStatusReport');
// $app->get('/top/weeklystatus', 'getLastAddedWeeklyStatusReport');
//
// $app->get('/lastadded', 'getLastReportDetails');
// $app->get('/lastadded/metadata', 'getLastMetadata');
//* $app->get('/projectstatus/issuecodes', 'getAllIssueCodes');
//* $app->get('/projectstatus/colorcodes', 'getAllColorCodes');
//- $app->get('/projectstatus/formatkeys', 'getAllFormatKeys');
// $app->get('/projectstatus','getAllProjectStatus');
// $app->get('/projectstatus/lastadded', 'getLastProjectStatusDetails');
// $app->get('/projectstatus/:dt',  'getProjectStatus');
// //$app->get('/projectstatus/lastadded', 'getLastProjectStatusDetails');
//
// // Render reports
// $app->get('/weeklystatus', 'getAllWeeklyStatus');
// $app->get('/weeklystatus/lastadded', 'getLastWeeklyReportDetails');
// $app->get('/weeklystatus/:dt',   'getWeeklyStatus');
// $app->get('/weeklystatus/:dt/metadata', 'getWeeklyStatusMetadata');
// $app->get('/delete/:activeTab/:reporttype/:id', 'deleteReport');
//
// $app->get('/submit/:activeTab/:reporttype/:id/:username', 'submitReport');
// $app->get('/searchdate/:txt', 'searchReportsByDate');
// $app->get('/searchtype/:type','searchReportsByType');
// $app->get('/search/:type/:txt', 'searchReports');
//
// $app->get('/uploaded/:id', 'showUploadedFile');
// //$app->get('/projectstatus', 'getAllProjectStatus');
// //$app->get('/projectstatus/:dt',    'getProjectStatus');
//
// $app->get('/privilege/:id/:privilege', 'setUpdatePrivileges');
// $app->get('/users', 'getUsers');
// $app->get('/user/add', 'addUser' );
// $app->get('/user/disable', 'disableUser' );
// $app->get('/user/resetpassword', 'resetUserPassword' );
// $app->get('/userprivilege', 'getUserPrivilege' );
// $app->get('/privileges', 'getPrivileges');
//
//
// // login
// $app->post('/login', 'verifyLogin');
//
//
app.listen(4567);
console.log('Open your browser to http://localhost:4567');

