// export * from './user.component';
System.register(['./user.model', './user-list.component', './user.service'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (user_model_1_1) {
                exportStar_1(user_model_1_1);
            },
            function (user_list_component_1_1) {
                exportStar_1(user_list_component_1_1);
            },
            function (user_service_1_1) {
                exportStar_1(user_service_1_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DIiwiZmlsZSI6InVzZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgKiBmcm9tICcuL3VzZXIuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi91c2VyLm1vZGVsJztcblxuZXhwb3J0ICogZnJvbSAnLi91c2VyLWxpc3QuY29tcG9uZW50Jztcbi8vIGV4cG9ydCAqIGZyb20gJy4vdXNlci5sb2dpbi5jb21wb25lbnQnO1xuLy8gZXhwb3J0ICogZnJvbSAnLi91c2VyLnJlZ2lzdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmljZSc7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
