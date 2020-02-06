(this["webpackJsonpcseju-office-management-app"]=this["webpackJsonpcseju-office-management-app"]||[]).push([[6],{109:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(9),l=a(11),s=a(10),o=a(34),c=a(12),u=a(0),m=a.n(u),i=a(77),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).getCourseTypes=function(){for(var e=a.state.syllabusXmlObj.getElementsByTagName("courseType"),t=[],r=0;r<e.length;r++)t.push(e[r].getAttribute("name"));a.setState({courseTypes:t})},a.getCourses=function(e){for(var t=e.getElementsByTagName("course"),a=[],r=0;r<t.length;r++){var n={courseCode:"",courseTitle:"",courseCredit:""};n.courseCode=t[r].getAttribute("courseCode"),a.push(n)}return a},a.getSemesters=function(e){for(var t=e.getElementsByTagName("semester"),r=[],n=0;n<t.length;n++)r.push({semesterId:n+1,courses:a.getCourses(t[n])});return r},a.getYears=function(){for(var e=a.state.syllabusXmlObj.getElementsByTagName("year"),t=[],r=0;r<e.length;r++){var n=a.getSemesters(e[r]);t.push(n)}a.setState({years:t})},a.getBasicInfo=function(){},a.getNumberSuffix=function(e){return e%10===1?"st":e%10===2?"nd":e%10===3?"rd":"th"},a.getSemesterRowSpan=function(e,t){return Math.max(1,a.state.years[e][t].courses.length)},a.getYearRowSpan=function(e){if(0===a.state.years[e].length)return 1;for(var t=0,r=0;r<a.state.years[e].length;r++)t+=a.getSemesterRowSpan(e,r);return t},a.onchangeHandlerForAddNewCourseForm=function(e){},a.state={syllabusName:"syl1",syllabusXmlObj:"",effectiveFrom:0,effectiveTo:0,syllabusType:"",courseTypes:[],years:[],newCourse:{courseCode:"",courseTitle:"",courseCredit:"",year:"",semester:""}},a.onchangeHandlerForAddNewCourseForm=a.onchangeHandlerForAddNewCourseForm.bind(Object(o.a)(a)),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="".concat(i.a.restApiBaseUrl,"/syllabus/get/").concat(this.state.syllabusName),a=new DOMParser;fetch(t).then((function(e){return e.text()})).then((function(t){e.setState({syllabusXmlObj:a.parseFromString(t,"text/xml")}),e.getBasicInfo(),e.getCourseTypes(),e.getYears(),console.log(e.state.years)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"container"},m.a.createElement("h6",null,"Edit Syllabus"),m.a.createElement("div",null,m.a.createElement("table",{className:"table table-sm table-bordered "},m.a.createElement("thead",null),m.a.createElement("tbody",null,this.state.years.map((function(t,a){return m.a.createElement(m.a.Fragment,{key:Math.floor(1e3*Math.random())},m.a.createElement("tr",{key:Math.floor(1e3*Math.random())},m.a.createElement("td",{rowSpan:e.getYearRowSpan(a)},a+1+e.getNumberSuffix(a+1)+" Year"),t.length>0?m.a.createElement("td",{rowSpan:e.getSemesterRowSpan(a,0)},1+e.getNumberSuffix(1)+" Semester"):null,t.length>0&&t[0].courses.length>0?m.a.createElement(m.a.Fragment,{key:Math.floor(1e3*Math.random())},m.a.createElement("td",null,t[0].courses[0].courseCode),m.a.createElement("td",null,m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-pencil"}))),m.a.createElement("td",null,m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-trash",style:{color:"red"}})))):null),t.length>0&&t[0].courses.length>1?t[0].courses.map((function(e,t){return t>0?m.a.createElement("tr",{key:Math.floor(1e3*Math.random())},m.a.createElement("td",null,e.courseCode),m.a.createElement("td",null,m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-pencil"}))),m.a.createElement("td",null,m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-trash",style:{color:"red"}})))):null})):null,t.length>1?t.map((function(t,a){return a>0?m.a.createElement(m.a.Fragment,{key:Math.floor(1e3*Math.random())},m.a.createElement("tr",{key:Math.floor(1e3*Math.random())},m.a.createElement("td",{rowSpan:Math.max(1,t.courses.length)},a+1+e.getNumberSuffix(a+1)+" Semester"),t.courses.length>0?m.a.createElement(m.a.Fragment,{key:Math.floor(1e3*Math.random())},m.a.createElement("td",null,t.courses[0].courseCode),m.a.createElement("td",null,m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-pencil"}))),m.a.createElement("td",null,m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-trash",style:{color:"red"}})))):null),t.courses.length>1?t.courses.map((function(e,t){return t>0?m.a.createElement("tr",{key:Math.floor(1e3*Math.random())},m.a.createElement("td",null,e.courseCode),m.a.createElement("td",null,m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-pencil"}))),m.a.createElement("td",null,m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-trash",style:{color:"red"}})))):null})):null):null})):null)}))))),m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-4"},m.a.createElement("div",{className:"container"},m.a.createElement("h6",null,"Add New Course")),m.a.createElement("form",{id:"add new course form"},m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{className:"form-control",style:{fontSize:"11px"},type:"text",placeholder:"Course Code",value:this.state.newCourse.courseCode,required:!0})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{className:"form-control",style:{fontSize:"11px"},type:"text",placeholder:"Course Title",value:this.state.newCourse.courseTitle,required:!0,onChange:this.onchangeHandlerForAddNewCourseForm})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{className:"form-control",style:{fontSize:"11px"},type:"",placeholder:"Credit",value:this.state.newCourse.courseCredit,required:!0,onChange:this.onchangeHandlerForAddNewCourseForm})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Selet Year"),m.a.createElement("br",null),m.a.createElement("select",{value:this.state.newCourse.year,onChange:this.onchangeHandlerForAddNewCourseForm},this.state.years.map((function(t,a){return m.a.createElement("option",{key:a,value:a+1},a+1+e.getNumberSuffix(a+1)+" Year")})))),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Selet Semester"),m.a.createElement("br",null),m.a.createElement("select",{value:this.state.newCourse.semester,onChange:this.onchangeHandlerForAddNewCourseForm},this.state.years.map((function(t,a){return m.a.createElement("option",{key:a,value:a+1},a+1+e.getNumberSuffix(a+1)+" Semester")})))),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"submit",value:"Add New Course"})))))))}}]),t}(u.Component);t.default=d},77:function(e,t,a){"use strict";t.a={restApiBaseUrl:"https://cseju.herokuapp.com/api"}}}]);
//# sourceMappingURL=6.159a44fd.chunk.js.map