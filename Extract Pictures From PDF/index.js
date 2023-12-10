import {exportImages} from 'pdf-export-images';

exportImages('demo.pdf','images').then(
    function(data){
        console.log("image data : ", data);
    }
)
.catch(
    function(err){
        console.log("Something is wrong");
    }
)