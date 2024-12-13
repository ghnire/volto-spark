"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[3728],{"./src/components/theme/View/EventView.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return View_EventView}});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js"),objectSpread2=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Blocks=__webpack_require__("./src/helpers/Blocks/Blocks.js"),Url=__webpack_require__("./src/helpers/Url/Url.js"),Grid=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),RenderBlocks=__webpack_require__("./src/components/theme/View/RenderBlocks.jsx"),lib=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),useIntl=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/useIntl.js"),Segment=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),Header=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Header/Header.js"),List=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/List/List.js"),prop_types=__webpack_require__("../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("../../../node_modules/.pnpm/classnames@2.2.6/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Utils=__webpack_require__("./src/helpers/Utils/Utils.jsx"),Loadable=__webpack_require__("./src/helpers/Loadable/Loadable.jsx"),es=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),__jsx=react.createElement;const datesForDisplay=(start,end,moment)=>{const mStart=moment(start),mEnd=moment(end);if(!mStart.isValid()||!mEnd.isValid())return null;return{sameDay:mStart.isSame(mEnd,"day"),sameTime:mStart.isSame(mEnd,"minute"),startDate:mStart.format("ll"),startTime:mStart.format("LT"),endDate:mEnd.format("ll"),endTime:mEnd.format("LT")}},When_=({start:start,end:end,whole_day:whole_day,open_end:open_end,moment:momentlib})=>{const lang=(0,es.useSelector)((state=>state.intl.locale)),moment=momentlib.default;moment.locale((0,Utils.mc)(lang));const datesInfo=datesForDisplay(start,end,moment);if(datesInfo)return __jsx("p",{className:classnames_default()("event-when",{"same-day":datesInfo.sameDay,"same-time":datesInfo.sameTime,"whole-day":whole_day,"open-end":open_end})},datesInfo.sameDay?__jsx(react.Fragment,null,whole_day&&__jsx("span",{className:"start-date"},datesInfo.startDate),open_end&&!whole_day&&__jsx(react.Fragment,null,__jsx("span",{className:"start-date"},datesInfo.startDate)," from ",__jsx("span",{className:"start-time"},datesInfo.startTime)),!(whole_day||open_end)&&__jsx(react.Fragment,null,__jsx("span",{className:"start-date"},datesInfo.startDate)," from ",__jsx("span",{className:"start-time"},datesInfo.startTime)," to ",__jsx("span",{className:"end-time"},datesInfo.endTime))):__jsx(react.Fragment,null,__jsx("span",{className:"start"},__jsx("span",{className:"start-date"},datesInfo.startDate),!whole_day&&__jsx(react.Fragment,null,__jsx("span",null," "),__jsx("span",{className:"start-time"},datesInfo.startTime))),!open_end&&__jsx(react.Fragment,null," to ",__jsx("span",{className:"end"},__jsx("span",{className:"end-date"},datesInfo.endDate),!whole_day&&__jsx(react.Fragment,null,__jsx("span",null," "),__jsx("span",{className:"end-time"},datesInfo.endTime))))))},When=(0,Loadable.yM)(["moment"])(When_);When.propTypes={start:prop_types_default().string.isRequired,end:prop_types_default().string,whole_day:prop_types_default().bool,open_end:prop_types_default().bool};const Recurrence_=({recurrence:recurrence,start:start,moment:momentlib,rrule:rrule})=>{const moment=momentlib.default,{RRule:RRule,rrulestr:rrulestr}=rrule;recurrence.indexOf("DTSTART")<0&&(recurrence=RRule.optionsToString({dtstart:new Date(start)})+"\n"+recurrence);const rule=rrulestr(recurrence,{unfold:!0,forceset:!0});return __jsx(List.c,{items:rule.all().map((date=>datesForDisplay(date,void 0,moment))).map((date=>date.startDate))})},Recurrence=(0,Loadable.yM)(["moment","rrule"])(Recurrence_);Recurrence.propTypes={recurrence:prop_types_default().string.isRequired,start:prop_types_default().string.isRequired},When_.__docgenInfo={description:"",methods:[],displayName:"When_"},Recurrence_.__docgenInfo={description:"",methods:[],displayName:"Recurrence_"};var Icon=__webpack_require__("./src/components/theme/Icon/Icon.jsx"),calendar=__webpack_require__("./src/icons/calendar.svg"),calendar_default=__webpack_require__.n(calendar),EventDetails_jsx=react.createElement;const messages=(0,lib.defineMessages)({what:{id:"event_what",defaultMessage:"What"},when:{id:"event_when",defaultMessage:"When"},allDates:{id:"event_alldates",defaultMessage:"All dates"},downloadEvent:{id:"Download Event",defaultMessage:"Download Event"},where:{id:"event_where",defaultMessage:"Where"},contactName:{id:"event_contactname",defaultMessage:"Contact Name"},contactPhone:{id:"event_contactphone",defaultMessage:"Contact Phone"},attendees:{id:"event_attendees",defaultMessage:"Attendees"},website:{id:"event_website",defaultMessage:"Website"},visitWebsite:{id:"visit_external_website",defaultMessage:"Visit external website"}}),EventDetails=({content:content,display_as:display_as="aside"})=>{var _content$subjects,_content$attendees;const intl=(0,useIntl.c)();return EventDetails_jsx(Segment.c,(0,esm_extends.c)({as:display_as},"aside"===display_as?{floated:"right"}:{}),(null===(_content$subjects=content.subjects)||void 0===_content$subjects?void 0:_content$subjects.length)>0&&EventDetails_jsx(react.Fragment,null,EventDetails_jsx(Header.c,{dividing:!0,sub:!0},intl.formatMessage(messages.what)),EventDetails_jsx(List.c,{items:content.subjects})),EventDetails_jsx(Header.c,{dividing:!0,sub:!0},intl.formatMessage(messages.when)),EventDetails_jsx(When,{start:content.start,end:content.end,whole_day:content.whole_day,open_end:content.open_end}),content.recurrence&&EventDetails_jsx(react.Fragment,null,EventDetails_jsx(Header.c,{dividing:!0,sub:!0},intl.formatMessage(messages.allDates)),EventDetails_jsx(Recurrence,{recurrence:content.recurrence,start:content.start})),content.location&&EventDetails_jsx(react.Fragment,null,EventDetails_jsx(Header.c,{dividing:!0,sub:!0},intl.formatMessage(messages.where)),EventDetails_jsx("p",null,content.location)),content.contact_name&&EventDetails_jsx(react.Fragment,null,EventDetails_jsx(Header.c,{dividing:!0,sub:!0},intl.formatMessage(messages.contactName)),EventDetails_jsx("p",null,content.contact_email?EventDetails_jsx("a",{href:`mailto:${content.contact_email}`},content.contact_name):content.contact_name)),content.contact_phone&&EventDetails_jsx(react.Fragment,null,EventDetails_jsx(Header.c,{dividing:!0,sub:!0},intl.formatMessage(messages.contactPhone)),EventDetails_jsx("p",null,content.contact_phone)),(null===(_content$attendees=content.attendees)||void 0===_content$attendees?void 0:_content$attendees.length)>0&&EventDetails_jsx(react.Fragment,null,EventDetails_jsx(Header.c,{dividing:!0,sub:!0},intl.formatMessage(messages.attendees)),EventDetails_jsx(List.c,{items:content.attendees})),content.event_url&&EventDetails_jsx(react.Fragment,null,EventDetails_jsx(Header.c,{dividing:!0,sub:!0},intl.formatMessage(messages.website)),EventDetails_jsx("p",null,EventDetails_jsx("a",{href:content.event_url,target:"_blank",rel:"noopener noreferrer"},intl.formatMessage(messages.visitWebsite)))),EventDetails_jsx("div",{className:"download-event"},EventDetails_jsx(Icon.c,{name:calendar_default()}),EventDetails_jsx("a",{className:"ics-download",target:"_blank",rel:"noreferrer",href:`${(0,Url._c)(content["@id"])}/ics_view`},intl.formatMessage(messages.downloadEvent))))};var EventDetails_EventDetails=EventDetails;EventDetails.__docgenInfo={description:"",methods:[],displayName:"EventDetails",props:{display_as:{defaultValue:{value:"'aside'",computed:!1},required:!1}}};var Container_Container=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),registry=__webpack_require__("./src/registry.js"),EventView_jsx=react.createElement;const EventTextfieldView=({content:content})=>{const Image=registry.default.getComponent({name:"Image"}).component;return EventView_jsx(react.Fragment,null,content.title&&EventView_jsx("h1",{className:"documentFirstHeading"},content.title),content.description&&EventView_jsx("p",{className:"documentDescription"},content.description),content.image&&EventView_jsx(Image,{className:"document-image ui right floated image",item:content,imageField:"image",alt:""}),content.text&&EventView_jsx("div",{dangerouslySetInnerHTML:{__html:(0,Url.sp)(content.text.data)}}))},EventView=props=>{const{content:content}=props,Container=registry.default.getComponent({name:"Container"}).component||Container_Container.c;return EventView_jsx(Container,{id:"page-document",className:"view-wrapper event-view"},EventView_jsx(Grid.c,null,EventView_jsx(Grid.c.Column,{width:7,className:"mobile hidden"},(0,Blocks.I1)(content)?EventView_jsx(RenderBlocks.c,props):EventView_jsx(EventTextfieldView,props)),EventView_jsx(Grid.c.Column,{width:5,className:"mobile hidden"},EventView_jsx(EventDetails_EventDetails,{content:content})),EventView_jsx(Grid.c.Column,{width:12,only:"mobile"},(0,Blocks.I1)(content)?EventView_jsx(react.Fragment,null,EventView_jsx(RenderBlocks.c,(0,esm_extends.c)({},props,{content:(0,objectSpread2.c)((0,objectSpread2.c)({},content),{},{blocks_layout:{items:props.content.blocks_layout.items.slice(0,1)}})})),EventView_jsx(EventDetails_EventDetails,{content:content,display_as:"div"}),EventView_jsx(RenderBlocks.c,(0,esm_extends.c)({},props,{content:(0,objectSpread2.c)((0,objectSpread2.c)({},content),{},{blocks_layout:{items:props.content.blocks_layout.items.slice(1)}})}))):EventView_jsx(EventTextfieldView,props))))};var View_EventView=EventView;EventView.__docgenInfo={description:"EventView view component class.\n@function EventView\n@params {object} content Content object.\n@returns {string} Markup of the component.",methods:[],displayName:"EventView",props:{content:{description:"",type:{name:"shape",value:{title:{name:"string",required:!1},description:{name:"string",required:!1},text:{name:"shape",value:{data:{name:"string",required:!1}},required:!1},attendees:{name:"arrayOf",value:{name:"string"},required:!0},contact_email:{name:"string",required:!1},contact_name:{name:"string",required:!1},contact_phone:{name:"string",required:!1},end:{name:"string",required:!0},event_url:{name:"string",required:!1},location:{name:"string",required:!1},open_end:{name:"bool",required:!1},recurrence:{name:"any",required:!1},start:{name:"string",required:!0},subjects:{name:"arrayOf",value:{name:"string"},required:!0},whole_day:{name:"bool",required:!1}}},required:!0}}}}}]);