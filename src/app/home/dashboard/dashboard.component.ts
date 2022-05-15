import {AfterViewInit, Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import * as Map from "jsvectormap";
import 'jsvectormap/dist/maps/world.js'
import { ApplicationService } from 'ebad-api';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  title = 'ebad';

  cards = [{
    icon: 'currency-dollar',
    color: 'blue',
    line1: '132 Sales',
    line2: '12 waiting payments',
  },{
    icon: 'shopping-cart',
    color: 'green',
    line1: '78 Orders',
    line2: '32 shipped',
  },{
    icon: 'brand-twitter',
    color: 'twitter',
    line1: '623 Shares',
    line2: '16 today',
  },{
    icon: 'brand-facebook',
    color: 'facebook',
    line1: '132 Likes',
    line2: '21 today',
  },]


  public theme = 'theme-light';
  // @ViewChild("chart") chart: ChartComponent;
  public chartOptions1: any;
  public chartOptions2: any;
  public chartOptions3: any;
  public chartOptions4: any;
  public chartOptions5: any;
  public chartOptions6: any;
  public chartOptions7: any;
  public chartOptions8: any;
  public chartOptions9: any;
  public chartOptions10: any;
  public chartOptions11: any;
  public chartOptions12: any;


  constructor(@Inject(DOCUMENT) private document: Document) {

    // appService.getAllWrite().subscribe(data => {
    //   data.content?.map(x => console.log(x.name));
    // });
    this.chartOptions1 = {
      chart: {
        type: "area",
        fontFamily: 'inherit',
        height: 40.0,
        sparkline: {
          enabled: true
        },
        animations: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: .16,
        type: 'solid'
      },
      stroke: {
        width: 2,
        lineCap: "round",
        curve: "smooth",
      },
      series: [{
        name: "Profits",
        data: [37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67]
      }],
      grid: {
        strokeDashArray: 4,
      },
      xaxis: {
        labels: {
          padding: 0,
        },
        tooltip: {
          enabled: false
        },
        axisBorder: {
          show: false,
        },
        type: 'datetime',
      },
      yaxis: {
        labels: {
          padding: 4
        },
      },
      labels: [
        '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
      ],
      colors: ["#206bc4"],
      legend: {
        show: false,
      },
    }

    this.chartOptions2 = {
      chart: {
        type: "line",
        fontFamily: 'inherit',
        height: 40.0,
        sparkline: {
          enabled: true
        },
        animations: {
          enabled: false
        },
      },
      fill: {
        opacity: 1,
      },
      stroke: {
        width: [2, 1],
        dashArray: [0, 3],
        lineCap: "round",
        curve: "smooth",
      },
      series: [{
        name: "May",
        data: [37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 4, 46, 39, 62, 51, 35, 41, 67]
      }, {
        name: "April",
        data: [93, 54, 51, 24, 35, 35, 31, 67, 19, 43, 28, 36, 62, 61, 27, 39, 35, 41, 27, 35, 51, 46, 62, 37, 44, 53, 41, 65, 39, 37]
      }],
      grid: {
        strokeDashArray: 4,
      },
      xaxis: {
        labels: {
          padding: 0,
        },
        tooltip: {
          enabled: false
        },
        type: 'datetime',
      },
      yaxis: {
        labels: {
          padding: 4
        },
      },
      labels: [
        '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
      ],
      colors: ["#206bc4", "#a8aeb7"],
      legend: {
        show: false,
      },
    }

    this.chartOptions3 = {
      chart: {
        type: "bar",
        fontFamily: 'inherit',
        height: 40.0,
        sparkline: {
          enabled: true
        },
        animations: {
          enabled: false
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
        }
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      series: [{
        name: "Profits",
        data: [37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67]
      }],
      grid: {
        strokeDashArray: 4,
      },
      xaxis: {
        labels: {
          padding: 0,
        },
        tooltip: {
          enabled: false
        },
        axisBorder: {
          show: false,
        },
        type: 'datetime',
      },
      yaxis: {
        labels: {
          padding: 4
        },
      },
      labels: [
        '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
      ],
      colors: ["#206bc4"],
      legend: {
        show: false,
      },
    }

    this.chartOptions4 = {
      chart: {
        type: "bar",
        fontFamily: 'inherit',
        height: 240,
        parentHeightOffset: 0,
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false
        },
        stacked: true,
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
        }
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      series: [{
        name: "Web",
        data: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 12, 5, 8, 22, 6, 8, 6, 4, 1, 8, 24, 29, 51, 40, 47, 23, 26, 50, 26, 41, 22, 46, 47, 81, 46, 6]
      }, {
        name: "Social",
        data: [2, 5, 4, 3, 3, 1, 4, 7, 5, 1, 2, 5, 3, 2, 6, 7, 7, 1, 5, 5, 2, 12, 4, 6, 18, 3, 5, 2, 13, 15, 20, 47, 18, 15, 11, 10, 0]
      }, {
        name: "Other",
        data: [2, 9, 1, 7, 8, 3, 6, 5, 5, 4, 6, 4, 1, 9, 3, 6, 7, 5, 2, 8, 4, 9, 1, 2, 6, 7, 5, 1, 8, 3, 2, 3, 4, 9, 7, 1, 6]
      }],
      grid: {
        padding: {
          top: -20,
          right: 0,
          left: -4,
          bottom: -4
        },
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: true
          }
        },
      },
      xaxis: {
        labels: {
          padding: 0,
        },
        tooltip: {
          enabled: false
        },
        axisBorder: {
          show: false,
        },
        type: 'datetime',
      },
      yaxis: {
        labels: {
          padding: 4
        },
      },
      labels: [
        '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22', '2020-07-23', '2020-07-24', '2020-07-25', '2020-07-26'
      ],
      colors: ["#206bc4", "#79a6dc", "#bfe399"],
      legend: {
        show: false,
      },
    }

    this.chartOptions5 = {
      chart: {
        type: "radialBar",
        fontFamily: 'inherit',
        height: 40,
        width: 40,
        animations: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '75%'
          },
          track: {
            margin: 0
          },
          dataLabels: {
            show: false
          }
        }
      },
      colors: ["#206bc4"],
      series: [35],
    }

    this.chartOptions6 = {
      chart: {
        type: "area",
        fontFamily: 'inherit',
        height: 192,
        sparkline: {
          enabled: true
        },
        animations: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: .16,
        type: 'solid'
      },
      stroke: {
        width: 2,
        lineCap: "round",
        curve: "smooth",
      },
      series: [{
        name: "Purchases",
        data: [3, 5, 4, 6, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 8, 4, 14, 30, 17, 19, 15, 14, 25, 32, 40, 55, 60, 48, 52, 70]
      }],
      grid: {
        strokeDashArray: 4,
      },
      xaxis: {
        labels: {
          padding: 0,
        },
        tooltip: {
          enabled: false
        },
        axisBorder: {
          show: false,
        },
        type: 'datetime',
      },
      yaxis: {
        labels: {
          padding: 4
        },
      },
      labels: [
        '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
      ],
      colors: ["#206bc4"],
      legend: {
        show: false,
      },
      point: {
        show: false
      },
    }

    this.chartOptions7 = {
      chart: {
        type: "line",
        fontFamily: 'inherit',
        height: 24,
        animations: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        width: 2,
        lineCap: "round",
      },
      series: [{
        color: "#206bc4",
        data: [17, 24, 20, 10, 5, 1, 4, 18, 13]
      }],
    }

    this.chartOptions8 = {
      chart: {
        type: "line",
        fontFamily: 'inherit',
        height: 24,
        animations: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        width: 2,
        lineCap: "round",
      },
      series: [{
        color: "#206bc4",
        data: [13, 11, 19, 22, 12, 7, 14, 3, 21]
      }],
    }

    this.chartOptions9 = {
      chart: {
        type: "line",
        fontFamily: 'inherit',
        height: 24,
        animations: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        width: 2,
        lineCap: "round",
      },
      series: [{
        color: "#206bc4",
        data: [10, 13, 10, 4, 17, 3, 23, 22, 19]
      }],
    }

    this.chartOptions10 = {
      chart: {
        type: "line",
        fontFamily: 'inherit',
        height: 24,
        animations: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        width: 2,
        lineCap: "round",
      },
      series: [{
        color: "#206bc4",
        data: [6, 15, 13, 13, 5, 7, 17, 20, 19]
      }],
    }

    this.chartOptions11 ={
      chart: {
        type: "line",
        fontFamily: 'inherit',
        height: 24,
        animations: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        width: 2,
        lineCap: "round",
      },
      series: [{
        color: "#206bc4",
        data: [2, 11, 15, 14, 21, 20, 8, 23, 18, 14]
      }],
    }

    this.chartOptions12 = {
      chart: {
        type: "line",
        fontFamily: 'inherit',
        height: 24,
        animations: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        width: 2,
        lineCap: "round",
      },
      series: [{
        color: "#206bc4",
        data: [22, 12, 7, 14, 3, 21, 8, 23, 18, 14]
      }],
    }

  }



  ngAfterViewInit() {
    const map = new Map({
      selector: '#map-world',
      map: 'world',
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: '#F8FAFC',
          stroke: 'rgba(98, 105, 118, .16)',
          strokeWidth: 1,
        }
      },
      zoomOnScroll: false,
      zoomButtons: false,
      // -------- Series --------
      visualizeData: {
        scale: ['#F8FAFC', '#206bc4'],
        values: {
          "AF": 16,
          "AL": 11,
          "DZ": 158,
          "AO": 85,
          "AG": 1,
          "AR": 351,
          "AM": 8,
          "AU": 1219,
          "AT": 366,
          "AZ": 52,
          "BS": 7,
          "BH": 21,
          "BD": 105,
          "BB": 3,
          "BY": 52,
          "BE": 461,
          "BZ": 1,
          "BJ": 6,
          "BT": 1,
          "BO": 19,
          "BA": 16,
          "BW": 12,
          "BR": 2023,
          "BN": 11,
          "BG": 44,
          "BF": 8,
          "BI": 1,
          "KH": 11,
          "CM": 21,
          "CA": 1563,
          "CV": 1,
          "CF": 2,
          "TD": 7,
          "CL": 199,
          "CN": 5745,
          "CO": 283,
          "KM": 0,
          "CD": 12,
          "CG": 11,
          "CR": 35,
          "CI": 22,
          "HR": 59,
          "CY": 22,
          "CZ": 195,
          "DK": 304,
          "DJ": 1,
          "DM": 0,
          "DO": 50,
          "EC": 61,
          "EG": 216,
          "SV": 21,
          "GQ": 14,
          "ER": 2,
          "EE": 19,
          "ET": 30,
          "FJ": 3,
          "FI": 231,
          "FR": 2555,
          "GA": 12,
          "GM": 1,
          "GE": 11,
          "DE": 3305,
          "GH": 18,
          "GR": 305,
          "GD": 0,
          "GT": 40,
          "GN": 4,
          "GW": 0,
          "GY": 2,
          "HT": 6,
          "HN": 15,
          "HK": 226,
          "HU": 132,
          "IS": 12,
          "IN": 1430,
          "ID": 695,
          "IR": 337,
          "IQ": 84,
          "IE": 204,
          "IL": 201,
          "IT": 2036,
          "JM": 13,
          "JP": 5390,
          "JO": 27,
          "KZ": 129,
          "KE": 32,
          "KI": 0,
          "KR": 986,
          "KW": 117,
          "KG": 4,
          "LA": 6,
          "LV": 23,
          "LB": 39,
          "LS": 1,
          "LR": 0,
          "LY": 77,
          "LT": 35,
          "LU": 52,
          "MK": 9,
          "MG": 8,
          "MW": 5,
          "MY": 218,
          "MV": 1,
          "ML": 9,
          "MT": 7,
          "MR": 3,
          "MU": 9,
          "MX": 1004,
          "MD": 5,
          "MN": 5,
          "ME": 3,
          "MA": 91,
          "MZ": 10,
          "MM": 35,
          "NA": 11,
          "NP": 15,
          "NL": 770,
          "NZ": 138,
          "NI": 6,
          "NE": 5,
          "NG": 206,
          "NO": 413,
          "OM": 53,
          "PK": 174,
          "PA": 27,
          "PG": 8,
          "PY": 17,
          "PE": 153,
          "PH": 189,
          "PL": 438,
          "PT": 223,
          "QA": 126,
          "RO": 158,
          "RU": 1476,
          "RW": 5,
          "WS": 0,
          "ST": 0,
          "SA": 434,
          "SN": 12,
          "RS": 38,
          "SC": 0,
          "SL": 1,
          "SG": 217,
          "SK": 86,
          "SI": 46,
          "SB": 0,
          "ZA": 354,
          "ES": 1374,
          "LK": 48,
          "KN": 0,
          "LC": 1,
          "VC": 0,
          "SD": 65,
          "SR": 3,
          "SZ": 3,
          "SE": 444,
          "CH": 522,
          "SY": 59,
          "TW": 426,
          "TJ": 5,
          "TZ": 22,
          "TH": 312,
          "TL": 0,
          "TG": 3,
          "TO": 0,
          "TT": 21,
          "TN": 43,
          "TR": 729,
          "TM": 0,
          "UG": 17,
          "UA": 136,
          "AE": 239,
          "GB": 2258,
          "US": 4624,
          "UY": 40,
          "UZ": 37,
          "VU": 0,
          "VE": 285,
          "VN": 101,
          "YE": 30,
          "ZM": 15,
          "ZW": 5
        },
      },
    });
    window.addEventListener("resize", () => {
      map.updateSize();
    });
  }

  drop(event: CdkDragDrop<any[]>) {
      moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }


}
