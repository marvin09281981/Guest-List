var Name_Of_The_Guest_array =[];
function Submit() {
    var Guest_name = document.getElementById("Enter_name").value;
    Name_Of_The_Guest_Array.push(Guest_name);
    document.getElementById("Display_names").innerHTML = Name_Of_The_Guest_Array;
    console.log(Name_Of_The_Guest_Array);
    var length_of_the_array = Name_Of_The_Guest_Array.length_of_the_array;
    console.log(length_of_the_array);
}
function Show_list() {
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("Show_names").innerHTML = i.toString();
}
function sorting(){
    Name_Of_The_Guest_Array.sorting();
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.getElementById("Sorted_name").value;
    var found = 0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length_of_the_array; j++){
if(s==Name_Of_The_Guest_Array[j]){
found = found+1;

}

    }
    document.getElementById("Search_names").innerHTML = "Name Found "+found+" Time/s";
    console.log.length_of_the_array("Found Name "+found+" Time/s");
}