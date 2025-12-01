function submit(){
    let selectedBatchTiming=[];

    document.querySelector("input[name='batch']:cecked")
    .forEach((element)=>{
        selectedBatchTiming.push(element.value);
    });
}
console.log(selectedBatchTiming);
const selectedBatch =document.querySelector