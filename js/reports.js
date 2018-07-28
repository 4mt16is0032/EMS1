$(function () {
    var deptCAndS = dept_tsalary();
    var deptC_Qual = dept_qual_count_info();
    showDeptCAndS();
    showDeptQuali();
    var qual_count=emp_qual_count_fun();
    console.log(qual_count);
    function showDeptCAndS(){
        var headings = ["Department", "Count", "Salary"];
        var data = "";
        data += "<table class='table table-hover table-striped table-light'>";
        data += "<thead class=table-dark><tr>";
        for (var i = 0; i < headings.length; i++) {
            data += "<th>" + headings[i] + "</th>"
        }
        data += "</tr></thead>";
        for (var i = 0; i < deptCAndS.length; i++) {
            data += "<tr>";
            data += "<td>" + deptCAndS[i].dname + "</td>";
            data += "<td>" + deptCAndS[i].count + "</td>";
            data += "<td>" + deptCAndS[i].tsal + "</td>";
            data += "</tr>";
        }
        data += "</table>";
        $("#deptsctable").html(data);
    }
    
    function showDeptQuali(){
        var headings = ["Department", "Qualification", "Count"];
        var data = "";
        data += "<table class='table table-hover table-striped table-light'>";
        data += "<thead class=table-dark><tr>";
        for (var i = 0; i < headings.length; i++) {
            data += "<th>" + headings[i] + "</th>"
        }
        data += "</tr></thead>";
        for (var i = 0; i < deptC_Qual.length; i++) {
            data += "<tr>";
            data += "<td>" + deptC_Qual[i].dname + "</td>";
            data += "<td>" + deptC_Qual[i].qual + "</td>";
            data += "<td>" + deptC_Qual[i].count + "</td>";
            data += "</tr>";
        }
        data += "</table>";
        $("#deptqtable").html(data);
    }
    initialize();
    function initialize(){
        // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawColumnChart);
       google.charts.setOnLoadCallback(drawPiChart);
    }
    function drawColumnChart(){
//        var data = new google.visualization.DataTable();
//        var options = {
//            
//                      };
//        var chart = new google.visualization.PieChart(document.getElementById('deptempcountchart'));
//        chart.draw(data, options);
        
        
        
        
        google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Qualification');
      data.addColumn('number', 'Total');
     
      cols=[];
        for(var i=0;i<qual_count.length;i++){
            var ele = qual_count[i];
            cols.push([ele.qual,ele.count])
        }
        data.addRows(rows);
//      data.addRows([
//        [{v: [8, 0, 0], f: '8 am'}, 1, .25],
//        [{v: [9, 0, 0], f: '9 am'}, 2, .5],
//        [{v: [10, 0, 0], f:'10 am'}, 3, 1],
//        [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
//        [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
//        [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
//        [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
//        [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
//        [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
//        [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
//      ]);

      var options = {
        title: 'Qualification and count Details',
        isStacked: true,
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('deptsalarychart'));
      chart.draw(data, options);
    }
        
        
        
        
    }
    function drawPiChart(){
         // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Qualification');
        data.addColumn('number', 'Total');
        rows=[];
        for(var i=0;i<qual_count.length;i++){
            var ele = qual_count[i];
            rows.push([ele.qual,ele.count])
        }
        data.addRows(rows);
        // Set chart options
        var options = {'title':'Qualification and count Details',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('deptempcountchart'));
        chart.draw(data, options);
   }
});
