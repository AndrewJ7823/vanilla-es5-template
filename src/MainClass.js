
class MainClass {
    constructor($target){
        let $mainClass = document.createElement("main-class");
        $mainClass.innerText = "HelloWorld!!";
        this.$mainClass = $mainClass;
        $target.appendChild($mainClass);
    }
}
export default MainClass;