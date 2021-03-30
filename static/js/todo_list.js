function AppViewModel(){
    
    console.log("In APPViewModel()");
    this.taskName=ko.observable("Enter your task")

}
ko.applyBindings(new AppViewModel())