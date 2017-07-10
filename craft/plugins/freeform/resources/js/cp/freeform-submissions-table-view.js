"undefined"==typeof Craft.Freeform&&(Craft.Freeform={}),Craft.Freeform.SubmissionsTableView=Craft.TableElementIndexView.extend({startDate:null,endDate:null,startDatepicker:null,endDatepicker:null,$chartExplorer:null,$totalValue:null,$chartContainer:null,$spinner:null,$error:null,$chart:null,$startDate:null,$endDate:null,afterInit:function(){this.$explorerContainer=$('<div class="chart-explorer-container"></div>').prependTo(this.$container),this.createChartExplorer(),this.base()},getStorage:function(e){return Craft.Freeform.SubmissionsTableView.getStorage(this.elementIndex._namespace,e)},setStorage:function(e,t){Craft.Freeform.SubmissionsTableView.setStorage(this.elementIndex._namespace,e,t)},createChartExplorer:function(){var e=$('<div class="chart-explorer"></div>').appendTo(this.$explorerContainer),t=$('<div class="chart-header"></div>').appendTo(e),a=$('<div class="date-range" />').appendTo(t),r=$('<div class="datewrapper"></div>').appendTo(a),s=($('<span class="to light">to</span>').appendTo(a),$('<div class="datewrapper"></div>').appendTo(a)),i=$('<div class="total"></div>').appendTo(t),n=($('<div class="total-label light">'+Craft.t("Total Submissions")+"</div>").appendTo(i),$('<div class="total-value-wrapper"></div>').appendTo(i));$totalValue=$('<span class="total-value">&nbsp;</span>').appendTo(n),this.$chartExplorer=e,this.$totalValue=$totalValue,this.$chartContainer=$('<div class="chart-container"></div>').appendTo(e),this.$spinner=$('<div class="spinner hidden" />').prependTo(t),this.$error=$('<div class="error"></div>').appendTo(this.$chartContainer),this.$chart=$('<div class="chart"></div>').appendTo(this.$chartContainer),this.$startDate=$('<input type="text" class="text" size="20" autocomplete="off" />').appendTo(r),this.$endDate=$('<input type="text" class="text" size="20" autocomplete="off" />').appendTo(s),this.$startDate.datepicker($.extend({onSelect:$.proxy(this,"handleStartDateChange")},Craft.datepickerOptions)),this.$endDate.datepicker($.extend({onSelect:$.proxy(this,"handleEndDateChange")},Craft.datepickerOptions)),this.startDatepicker=this.$startDate.data("datepicker"),this.endDatepicker=this.$endDate.data("datepicker"),this.addListener(this.$startDate,"keyup","handleStartDateChange"),this.addListener(this.$endDate,"keyup","handleEndDateChange");var o=this.getStorage("startTime")||(new Date).getTime()-2592e6,d=this.getStorage("endTime")||(new Date).getTime();this.setStartDate(new Date(o)),this.setEndDate(new Date(d)),this.loadReport()},handleStartDateChange:function(){this.setStartDate(Craft.Freeform.SubmissionsTableView.getDateFromDatepickerInstance(this.startDatepicker))&&this.loadReport()},handleEndDateChange:function(){this.setEndDate(Craft.Freeform.SubmissionsTableView.getDateFromDatepickerInstance(this.endDatepicker))&&this.loadReport()},setStartDate:function(e){return(!this.startDate||e.getTime()!=this.startDate.getTime())&&(this.startDate=e,this.setStorage("startTime",this.startDate.getTime()),this.$startDate.val(Craft.formatDate(this.startDate)),this.endDate&&this.startDate.getTime()>this.endDate.getTime()&&this.setEndDate(new Date(this.startDate.getTime())),!0)},setEndDate:function(e){return(!this.endDate||e.getTime()!=this.endDate.getTime())&&(this.endDate=e,this.setStorage("endTime",this.endDate.getTime()),this.$endDate.val(Craft.formatDate(this.endDate)),this.startDate&&this.endDate.getTime()<this.startDate.getTime()&&this.setStartDate(new Date(this.endDate.getTime())),!0)},loadReport:function(){var e=this.settings.params;e.startDate=Craft.Freeform.SubmissionsTableView.getDateValue(this.startDate),e.endDate=Craft.Freeform.SubmissionsTableView.getDateValue(this.endDate),this.$spinner.removeClass("hidden"),this.$error.addClass("hidden"),this.$chart.removeClass("error"),Craft.postActionRequest("freeform/api/getSubmissionData",e,$.proxy(function(e,t){if(this.$spinner.addClass("hidden"),"success"==t&&"undefined"==typeof e.error){this.chart||(this.chart=new Craft.charts.Area(this.$chart));var a=new Craft.charts.DataTable(e.dataTable),r={localeDefinition:e.localeDefinition,orientation:e.orientation,formats:e.formats,dataScale:e.scale};this.chart.draw(a,r),this.$totalValue.html(e.totalHtml)}else{var s=Craft.t("An unknown error occurred.");"undefined"!=typeof e&&e&&"undefined"!=typeof e.error&&(s=e.error),this.$error.html(s),this.$error.removeClass("hidden"),this.$chart.addClass("error")}},this))}},{storage:{},getStorage:function(e,t){return Craft.Freeform.SubmissionsTableView.storage[e]&&Craft.Freeform.SubmissionsTableView.storage[e][t]?Craft.Freeform.SubmissionsTableView.storage[e][t]:null},setStorage:function(e,t,a){"undefined"==typeof Craft.Freeform.SubmissionsTableView.storage[e]&&(Craft.Freeform.SubmissionsTableView.storage[e]={}),Craft.Freeform.SubmissionsTableView.storage[e][t]=a},getDateFromDatepickerInstance:function(e){return new Date(e.currentYear,e.currentMonth,e.currentDay)},getDateValue:function(e){return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZWVmb3JtLXN1Ym1pc3Npb25zLXRhYmxlLXZpZXcuanMiXSwibmFtZXMiOlsiQ3JhZnQiLCJGcmVlZm9ybSIsIlN1Ym1pc3Npb25zVGFibGVWaWV3IiwiVGFibGVFbGVtZW50SW5kZXhWaWV3IiwiZXh0ZW5kIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZXBpY2tlciIsImVuZERhdGVwaWNrZXIiLCIkY2hhcnRFeHBsb3JlciIsIiR0b3RhbFZhbHVlIiwiJGNoYXJ0Q29udGFpbmVyIiwiJHNwaW5uZXIiLCIkZXJyb3IiLCIkY2hhcnQiLCIkc3RhcnREYXRlIiwiJGVuZERhdGUiLCJhZnRlckluaXQiLCJ0aGlzIiwiJGV4cGxvcmVyQ29udGFpbmVyIiwiJCIsInByZXBlbmRUbyIsIiRjb250YWluZXIiLCJjcmVhdGVDaGFydEV4cGxvcmVyIiwiYmFzZSIsImdldFN0b3JhZ2UiLCJrZXkiLCJlbGVtZW50SW5kZXgiLCJfbmFtZXNwYWNlIiwic2V0U3RvcmFnZSIsInZhbHVlIiwiYXBwZW5kVG8iLCIkY2hhcnRIZWFkZXIiLCIkZGF0ZVJhbmdlIiwiJHN0YXJ0RGF0ZUNvbnRhaW5lciIsIiRlbmREYXRlQ29udGFpbmVyIiwiJHRvdGFsIiwiJHRvdGFsVmFsdWVXcmFwcGVyIiwidCIsImRhdGVwaWNrZXIiLCJvblNlbGVjdCIsInByb3h5IiwiZGF0ZXBpY2tlck9wdGlvbnMiLCJkYXRhIiwiYWRkTGlzdGVuZXIiLCJzdGFydFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImVuZFRpbWUiLCJzZXRTdGFydERhdGUiLCJzZXRFbmREYXRlIiwibG9hZFJlcG9ydCIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImdldERhdGVGcm9tRGF0ZXBpY2tlckluc3RhbmNlIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImRhdGUiLCJ2YWwiLCJmb3JtYXREYXRlIiwicmVxdWVzdERhdGEiLCJzZXR0aW5ncyIsInBhcmFtcyIsImdldERhdGVWYWx1ZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwb3N0QWN0aW9uUmVxdWVzdCIsInJlc3BvbnNlIiwidGV4dFN0YXR1cyIsImNoYXJ0IiwiY2hhcnRzIiwiQXJlYSIsImNoYXJ0RGF0YVRhYmxlIiwiRGF0YVRhYmxlIiwiZGF0YVRhYmxlIiwiY2hhcnRTZXR0aW5ncyIsImxvY2FsZURlZmluaXRpb24iLCJvcmllbnRhdGlvbiIsImZvcm1hdHMiLCJkYXRhU2NhbGUiLCJzY2FsZSIsImRyYXciLCJodG1sIiwidG90YWxIdG1sIiwibXNnIiwiZXJyb3IiLCJzdG9yYWdlIiwibmFtZXNwYWNlIiwiaW5zdCIsImN1cnJlbnRZZWFyIiwiY3VycmVudE1vbnRoIiwiY3VycmVudERheSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIl0sIm1hcHBpbmdzIjoiQUFVOEIsbUJBQW5CQSxPQUFNQyxXQUNmRCxNQUFNQyxhQU1SRCxNQUFNQyxTQUFTQyxxQkFBdUJGLE1BQU1HLHNCQUFzQkMsUUFDOURDLFVBQVcsS0FDWEMsUUFBUyxLQUVUQyxnQkFBaUIsS0FDakJDLGNBQWUsS0FFZkMsZUFBZ0IsS0FDaEJDLFlBQWEsS0FDYkMsZ0JBQWlCLEtBQ2pCQyxTQUFVLEtBQ1ZDLE9BQVEsS0FDUkMsT0FBUSxLQUNSQyxXQUFZLEtBQ1pDLFNBQVUsS0FFVkMsVUFBVyxXQUNUQyxLQUFLQyxtQkFBcUJDLEVBQUUsZ0RBQWdEQyxVQUFVSCxLQUFLSSxZQUUzRkosS0FBS0ssc0JBRUxMLEtBQUtNLFFBR1BDLFdBQVksU0FBVUMsR0FDcEIsTUFBTzFCLE9BQU1DLFNBQVNDLHFCQUFxQnVCLFdBQVdQLEtBQUtTLGFBQWFDLFdBQVlGLElBR3RGRyxXQUFZLFNBQVVILEVBQUtJLEdBQ3pCOUIsTUFBTUMsU0FBU0MscUJBQXFCMkIsV0FBV1gsS0FBS1MsYUFBYUMsV0FBWUYsRUFBS0ksSUFHcEZQLG9CQUFxQixXQUVuQixHQUFJZCxHQUFzQlcsRUFBRSxzQ0FBc0NXLFNBQVNiLEtBQUtDLG9CQUM1RWEsRUFBc0JaLEVBQUUsb0NBQW9D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QWNyRixNQUFNQyxTQUFTQyxxQkFBcUJrRixRQUFRQyxHQUFXM0QsR0FDNUcxQixNQUFNQyxTQUFTQyxxQkFBcUJrRixRQUFRQyxHQUFXM0QsR0FHekQsTUFHVEcsV0FBWSxTQUFVd0QsRUFBVzNELEVBQUtJLEdBQ2lDLG1CQUExRDlCLE9BQU1DLFNBQVNDLHFCQUFxQmtGLFFBQVFDLEtBQ3JEckYsTUFBTUMsU0FBU0MscUJBQXFCa0YsUUFBUUMsT0FHOUNyRixNQUFNQyxTQUFTQyxxQkFBcUJrRixRQUFRQyxHQUFXM0QsR0FBT0ksR0FHaEV1Qiw4QkFBK0IsU0FBVWlDLEdBQ3ZDLE1BQU8sSUFBSXhDLE1BQUt3QyxFQUFLQyxZQUFhRCxFQUFLRSxhQUFjRixFQUFLRyxhQUc1RDVCLGFBQWMsU0FBVU4sR0FDdEIsTUFBT0EsR0FBS21DLGNBQWdCLEtBQU9uQyxFQUFLb0MsV0FBYSxHQUFLLElBQU1wQyxFQUFLcUMiLCJmaWxlIjoiZnJlZWZvcm0tc3VibWlzc2lvbnMtdGFibGUtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBGcmVlZm9ybSBmb3IgQ3JhZnRcbiAqXG4gKiBAcGFja2FnZSAgICAgICBTb2xzcGFjZTpGcmVlZm9ybVxuICogQGF1dGhvciAgICAgICAgU29sc3BhY2UsIEluYy5cbiAqIEBjb3B5cmlnaHQgICAgIENvcHlyaWdodCAoYykgMjAwOC0yMDE2LCBTb2xzcGFjZSwgSW5jLlxuICogQGxpbmsgICAgICAgICAgaHR0cHM6Ly9zb2xzcGFjZS5jb20vY3JhZnQvZnJlZWZvcm1cbiAqIEBsaWNlbnNlICAgICAgIGh0dHBzOi8vc29sc3BhY2UuY29tL3NvZnR3YXJlL2xpY2Vuc2UtYWdyZWVtZW50XG4gKi9cblxuaWYgKHR5cGVvZiBDcmFmdC5GcmVlZm9ybSA9PT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICBDcmFmdC5GcmVlZm9ybSA9IHt9O1xufVxuXG4vKipcbiAqIENsYXNzIENyYWZ0LkZyZWVmb3JtLlN1Ym1pc3Npb25zVGFibGVWaWV3XG4gKi9cbkNyYWZ0LkZyZWVmb3JtLlN1Ym1pc3Npb25zVGFibGVWaWV3ID0gQ3JhZnQuVGFibGVFbGVtZW50SW5kZXhWaWV3LmV4dGVuZCh7XG4gICAgc3RhcnREYXRlOiBudWxsLFxuICAgIGVuZERhdGU6IG51bGwsXG5cbiAgICBzdGFydERhdGVwaWNrZXI6IG51bGwsXG4gICAgZW5kRGF0ZXBpY2tlcjogbnVsbCxcblxuICAgICRjaGFydEV4cGxvcmVyOiBudWxsLFxuICAgICR0b3RhbFZhbHVlOiBudWxsLFxuICAgICRjaGFydENvbnRhaW5lcjogbnVsbCxcbiAgICAkc3Bpbm5lcjogbnVsbCxcbiAgICAkZXJyb3I6IG51bGwsXG4gICAgJGNoYXJ0OiBudWxsLFxuICAgICRzdGFydERhdGU6IG51bGwsXG4gICAgJGVuZERhdGU6IG51bGwsXG5cbiAgICBhZnRlckluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuJGV4cGxvcmVyQ29udGFpbmVyID0gJCgnPGRpdiBjbGFzcz1cImNoYXJ0LWV4cGxvcmVyLWNvbnRhaW5lclwiPjwvZGl2PicpLnByZXBlbmRUbyh0aGlzLiRjb250YWluZXIpO1xuXG4gICAgICB0aGlzLmNyZWF0ZUNoYXJ0RXhwbG9yZXIoKTtcblxuICAgICAgdGhpcy5iYXNlKCk7XG4gICAgfSxcblxuICAgIGdldFN0b3JhZ2U6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBDcmFmdC5GcmVlZm9ybS5TdWJtaXNzaW9uc1RhYmxlVmlldy5nZXRTdG9yYWdlKHRoaXMuZWxlbWVudEluZGV4Ll9uYW1lc3BhY2UsIGtleSk7XG4gICAgfSxcblxuICAgIHNldFN0b3JhZ2U6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBDcmFmdC5GcmVlZm9ybS5TdWJtaXNzaW9uc1RhYmxlVmlldy5zZXRTdG9yYWdlKHRoaXMuZWxlbWVudEluZGV4Ll9uYW1lc3BhY2UsIGtleSwgdmFsdWUpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVDaGFydEV4cGxvcmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjaGFydCBleHBsb3JlclxuICAgICAgdmFyICRjaGFydEV4cGxvcmVyICAgICAgPSAkKCc8ZGl2IGNsYXNzPVwiY2hhcnQtZXhwbG9yZXJcIj48L2Rpdj4nKS5hcHBlbmRUbyh0aGlzLiRleHBsb3JlckNvbnRhaW5lciksXG4gICAgICAgICAgJGNoYXJ0SGVhZGVyICAgICAgICA9ICQoJzxkaXYgY2xhc3M9XCJjaGFydC1oZWFkZXJcIj48L2Rpdj4nKS5hcHBlbmRUbygkY2hhcnRFeHBsb3JlciksXG4gICAgICAgICAgJGRhdGVSYW5nZSAgICAgICAgICA9ICQoJzxkaXYgY2xhc3M9XCJkYXRlLXJhbmdlXCIgLz4nKS5hcHBlbmRUbygkY2hhcnRIZWFkZXIpLFxuICAgICAgICAgICRzdGFydERhdGVDb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwiZGF0ZXdyYXBwZXJcIj48L2Rpdj4nKS5hcHBlbmRUbygkZGF0ZVJhbmdlKSxcbiAgICAgICAgICAkdG8gICAgICAgICAgICAgICAgID0gJCgnPHNwYW4gY2xhc3M9XCJ0byBsaWdodFwiPnRvPC9zcGFuPicpLmFwcGVuZFRvKCRkYXRlUmFuZ2UpLFxuICAgICAgICAgICRlbmREYXRlQ29udGFpbmVyICAgPSAkKCc8ZGl2IGNsYXNzPVwiZGF0ZXdyYXBwZXJcIj48L2Rpdj4nKS5hcHBlbmRUbygkZGF0ZVJhbmdlKSxcbiAgICAgICAgICAkdG90YWwgICAgICAgICAgICAgID0gJCgnPGRpdiBjbGFzcz1cInRvdGFsXCI+PC9kaXY+JykuYXBwZW5kVG8oJGNoYXJ0SGVhZGVyKSxcbiAgICAgICAgICAkdG90YWxMYWJlbCAgICAgICAgID0gJCgnPGRpdiBjbGFzcz1cInRvdGFsLWxhYmVsIGxpZ2h0XCI+JyArIENyYWZ0LnQoJ1RvdGFsIFN1Ym1pc3Npb25zJykgKyAnPC9kaXY+JykuYXBwZW5kVG8oJHRvdGFsKSxcbiAgICAgICAgICAkdG90YWxWYWx1ZVdyYXBwZXIgID0gJCgnPGRpdiBjbGFzcz1cInRvdGFsLXZhbHVlLXdyYXBwZXJcIj48L2Rpdj4nKS5hcHBlbmRUbygkdG90YWwpO1xuICAgICAgJHRvdGFsVmFsdWUgICAgICAgICAgICAgPSAkKCc8c3BhbiBjbGFzcz1cInRvdGFsLXZhbHVlXCI+Jm5ic3A7PC9zcGFuPicpLmFwcGVuZFRvKCR0b3RhbFZhbHVlV3JhcHBlcik7XG5cbiAgICAgIHRoaXMuJGNoYXJ0RXhwbG9yZXIgID0gJGNoYXJ0RXhwbG9yZXI7XG4gICAgICB0aGlzLiR0b3RhbFZhbHVlICAgICA9ICR0b3RhbFZhbHVlO1xuICAgICAgdGhpcy4kY2hhcnRDb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCI+PC9kaXY+JykuYXBwZW5kVG8oJGNoYXJ0RXhwbG9yZXIpO1xuICAgICAgdGhpcy4kc3Bpbm5lciAgICAgICAgPSAkKCc8ZGl2IGNsYXNzPVwic3Bpbm5lciBoaWRkZW5cIiAvPicpLnByZXBlbmRUbygkY2hhcnRIZWFkZXIpO1xuICAgICAgdGhpcy4kZXJyb3IgICAgICAgICAgPSAkKCc8ZGl2IGNsYXNzPVwiZXJyb3JcIj48L2Rpdj4nKS5hcHBlbmRUbyh0aGlzLiRjaGFydENvbnRhaW5lcik7XG4gICAgICB0aGlzLiRjaGFydCAgICAgICAgICA9ICQoJzxkaXYgY2xhc3M9XCJjaGFydFwiPjwvZGl2PicpLmFwcGVuZFRvKHRoaXMuJGNoYXJ0Q29udGFpbmVyKTtcblxuICAgICAgdGhpcy4kc3RhcnREYXRlID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0ZXh0XCIgc2l6ZT1cIjIwXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz4nKS5hcHBlbmRUbygkc3RhcnREYXRlQ29udGFpbmVyKTtcbiAgICAgIHRoaXMuJGVuZERhdGUgICA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGV4dFwiIHNpemU9XCIyMFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIC8+JykuYXBwZW5kVG8oJGVuZERhdGVDb250YWluZXIpO1xuXG4gICAgICB0aGlzLiRzdGFydERhdGUuZGF0ZXBpY2tlcigkLmV4dGVuZCh7XG4gICAgICAgIG9uU2VsZWN0OiAkLnByb3h5KHRoaXMsICdoYW5kbGVTdGFydERhdGVDaGFuZ2UnKVxuICAgICAgfSwgQ3JhZnQuZGF0ZXBpY2tlck9wdGlvbnMpKTtcblxuICAgICAgdGhpcy4kZW5kRGF0ZS5kYXRlcGlja2VyKCQuZXh0ZW5kKHtcbiAgICAgICAgb25TZWxlY3Q6ICQucHJveHkodGhpcywgJ2hhbmRsZUVuZERhdGVDaGFuZ2UnKVxuICAgICAgfSwgQ3JhZnQuZGF0ZXBpY2tlck9wdGlvbnMpKTtcblxuICAgICAgdGhpcy5zdGFydERhdGVwaWNrZXIgPSB0aGlzLiRzdGFydERhdGUuZGF0YSgnZGF0ZXBpY2tlcicpO1xuICAgICAgdGhpcy5lbmREYXRlcGlja2VyICAgPSB0aGlzLiRlbmREYXRlLmRhdGEoJ2RhdGVwaWNrZXInKTtcblxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcih0aGlzLiRzdGFydERhdGUsICdrZXl1cCcsICdoYW5kbGVTdGFydERhdGVDaGFuZ2UnKTtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXIodGhpcy4kZW5kRGF0ZSwgJ2tleXVwJywgJ2hhbmRsZUVuZERhdGVDaGFuZ2UnKTtcblxuICAgICAgLy8gU2V0IHRoZSBzdGFydC9lbmQgZGF0ZXNcbiAgICAgIHZhciBzdGFydFRpbWUgPSB0aGlzLmdldFN0b3JhZ2UoJ3N0YXJ0VGltZScpIHx8ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gKDYwICogNjAgKiAyNCAqIDMwICogMTAwMCkpLFxuICAgICAgICAgIGVuZFRpbWUgICA9IHRoaXMuZ2V0U3RvcmFnZSgnZW5kVGltZScpIHx8ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpKTtcblxuICAgICAgdGhpcy5zZXRTdGFydERhdGUobmV3IERhdGUoc3RhcnRUaW1lKSk7XG4gICAgICB0aGlzLnNldEVuZERhdGUobmV3IERhdGUoZW5kVGltZSkpO1xuXG4gICAgICAvLyBMb2FkIHRoZSByZXBvcnRcbiAgICAgIHRoaXMubG9hZFJlcG9ydCgpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVTdGFydERhdGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnNldFN0YXJ0RGF0ZShDcmFmdC5GcmVlZm9ybS5TdWJtaXNzaW9uc1RhYmxlVmlldy5nZXREYXRlRnJvbURhdGVwaWNrZXJJbnN0YW5jZSh0aGlzLnN0YXJ0RGF0ZXBpY2tlcikpKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcG9ydCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVFbmREYXRlQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5zZXRFbmREYXRlKENyYWZ0LkZyZWVmb3JtLlN1Ym1pc3Npb25zVGFibGVWaWV3LmdldERhdGVGcm9tRGF0ZXBpY2tlckluc3RhbmNlKHRoaXMuZW5kRGF0ZXBpY2tlcikpKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcG9ydCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXRTdGFydERhdGU6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgaXQgaGFzIGFjdHVhbGx5IGNoYW5nZWRcbiAgICAgIGlmICh0aGlzLnN0YXJ0RGF0ZSAmJiBkYXRlLmdldFRpbWUoKSA9PSB0aGlzLnN0YXJ0RGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgICB0aGlzLnNldFN0b3JhZ2UoJ3N0YXJ0VGltZScsIHRoaXMuc3RhcnREYXRlLmdldFRpbWUoKSk7XG4gICAgICB0aGlzLiRzdGFydERhdGUudmFsKENyYWZ0LmZvcm1hdERhdGUodGhpcy5zdGFydERhdGUpKTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhZnRlciB0aGUgY3VycmVudCBlbmQgZGF0ZSwgc2V0IHRoZSBlbmQgZGF0ZSB0byBtYXRjaCBpdFxuICAgICAgaWYgKHRoaXMuZW5kRGF0ZSAmJiB0aGlzLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgPiB0aGlzLmVuZERhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgIHRoaXMuc2V0RW5kRGF0ZShuZXcgRGF0ZSh0aGlzLnN0YXJ0RGF0ZS5nZXRUaW1lKCkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIHNldEVuZERhdGU6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgaXQgaGFzIGFjdHVhbGx5IGNoYW5nZWRcbiAgICAgIGlmICh0aGlzLmVuZERhdGUgJiYgZGF0ZS5nZXRUaW1lKCkgPT0gdGhpcy5lbmREYXRlLmdldFRpbWUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW5kRGF0ZSA9IGRhdGU7XG4gICAgICB0aGlzLnNldFN0b3JhZ2UoJ2VuZFRpbWUnLCB0aGlzLmVuZERhdGUuZ2V0VGltZSgpKTtcbiAgICAgIHRoaXMuJGVuZERhdGUudmFsKENyYWZ0LmZvcm1hdERhdGUodGhpcy5lbmREYXRlKSk7XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYmVmb3JlIHRoZSBjdXJyZW50IHN0YXJ0IGRhdGUsIHNldCB0aGUgc3RhcnQgZGF0ZSB0byBtYXRjaCBpdFxuICAgICAgaWYgKHRoaXMuc3RhcnREYXRlICYmIHRoaXMuZW5kRGF0ZS5nZXRUaW1lKCkgPCB0aGlzLnN0YXJ0RGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGFydERhdGUobmV3IERhdGUodGhpcy5lbmREYXRlLmdldFRpbWUoKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbG9hZFJlcG9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlcXVlc3REYXRhID0gdGhpcy5zZXR0aW5ncy5wYXJhbXM7XG5cbiAgICAgIHJlcXVlc3REYXRhLnN0YXJ0RGF0ZSA9IENyYWZ0LkZyZWVmb3JtLlN1Ym1pc3Npb25zVGFibGVWaWV3LmdldERhdGVWYWx1ZSh0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgICByZXF1ZXN0RGF0YS5lbmREYXRlICAgPSBDcmFmdC5GcmVlZm9ybS5TdWJtaXNzaW9uc1RhYmxlVmlldy5nZXREYXRlVmFsdWUodGhpcy5lbmREYXRlKTtcblxuICAgICAgdGhpcy4kc3Bpbm5lci5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICB0aGlzLiRlcnJvci5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICB0aGlzLiRjaGFydC5yZW1vdmVDbGFzcygnZXJyb3InKTtcblxuICAgICAgQ3JhZnQucG9zdEFjdGlvblJlcXVlc3QoJ2ZyZWVmb3JtL2FwaS9nZXRTdWJtaXNzaW9uRGF0YScsIHJlcXVlc3REYXRhLCAkLnByb3h5KGZ1bmN0aW9uIChyZXNwb25zZSwgdGV4dFN0YXR1cykge1xuICAgICAgICB0aGlzLiRzcGlubmVyLmFkZENsYXNzKCdoaWRkZW4nKTtcblxuICAgICAgICBpZiAodGV4dFN0YXR1cyA9PSAnc3VjY2VzcycgJiYgdHlwZW9mKHJlc3BvbnNlLmVycm9yKSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmICghdGhpcy5jaGFydCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDcmFmdC5jaGFydHMuQXJlYSh0aGlzLiRjaGFydCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNoYXJ0RGF0YVRhYmxlID0gbmV3IENyYWZ0LmNoYXJ0cy5EYXRhVGFibGUocmVzcG9uc2UuZGF0YVRhYmxlKTtcblxuICAgICAgICAgIHZhciBjaGFydFNldHRpbmdzID0ge1xuICAgICAgICAgICAgbG9jYWxlRGVmaW5pdGlvbjogcmVzcG9uc2UubG9jYWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiByZXNwb25zZS5vcmllbnRhdGlvbixcbiAgICAgICAgICAgIGZvcm1hdHM6IHJlc3BvbnNlLmZvcm1hdHMsXG4gICAgICAgICAgICBkYXRhU2NhbGU6IHJlc3BvbnNlLnNjYWxlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMuY2hhcnQuZHJhdyhjaGFydERhdGFUYWJsZSwgY2hhcnRTZXR0aW5ncyk7XG5cbiAgICAgICAgICB0aGlzLiR0b3RhbFZhbHVlLmh0bWwocmVzcG9uc2UudG90YWxIdG1sKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgbXNnID0gQ3JhZnQudCgnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nKTtcblxuICAgICAgICAgIGlmICh0eXBlb2YocmVzcG9uc2UpICE9ICd1bmRlZmluZWQnICYmIHJlc3BvbnNlICYmIHR5cGVvZihyZXNwb25zZS5lcnJvcikgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1zZyA9IHJlc3BvbnNlLmVycm9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuJGVycm9yLmh0bWwobXNnKTtcbiAgICAgICAgICB0aGlzLiRlcnJvci5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgdGhpcy4kY2hhcnQuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpKTtcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzdG9yYWdlOiB7fSxcblxuICAgIGdldFN0b3JhZ2U6IGZ1bmN0aW9uIChuYW1lc3BhY2UsIGtleSkge1xuICAgICAgaWYgKENyYWZ0LkZyZWVmb3JtLlN1Ym1pc3Npb25zVGFibGVWaWV3LnN0b3JhZ2VbbmFtZXNwYWNlXSAmJiBDcmFmdC5GcmVlZm9ybS5TdWJtaXNzaW9uc1RhYmxlVmlldy5zdG9yYWdlW25hbWVzcGFjZV1ba2V5XSkge1xuICAgICAgICByZXR1cm4gQ3JhZnQuRnJlZWZvcm0uU3VibWlzc2lvbnNUYWJsZVZpZXcuc3RvcmFnZVtuYW1lc3BhY2VdW2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBzZXRTdG9yYWdlOiBmdW5jdGlvbiAobmFtZXNwYWNlLCBrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIENyYWZ0LkZyZWVmb3JtLlN1Ym1pc3Npb25zVGFibGVWaWV3LnN0b3JhZ2VbbmFtZXNwYWNlXSA9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgICAgIENyYWZ0LkZyZWVmb3JtLlN1Ym1pc3Npb25zVGFibGVWaWV3LnN0b3JhZ2VbbmFtZXNwYWNlXSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBDcmFmdC5GcmVlZm9ybS5TdWJtaXNzaW9uc1RhYmxlVmlldy5zdG9yYWdlW25hbWVzcGFjZV1ba2V5XSA9IHZhbHVlO1xuICAgIH0sXG5cbiAgICBnZXREYXRlRnJvbURhdGVwaWNrZXJJbnN0YW5jZTogZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShpbnN0LmN1cnJlbnRZZWFyLCBpbnN0LmN1cnJlbnRNb250aCwgaW5zdC5jdXJyZW50RGF5KTtcbiAgICB9LFxuXG4gICAgZ2V0RGF0ZVZhbHVlOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSArICctJyArIGRhdGUuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgfVxuKTtcbiJdfQ==
