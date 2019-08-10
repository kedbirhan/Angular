import { Component } from '@angular/core';
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ["./post-create.component.css"]

})  //this is a decorator that tells angular the class below is a component
export class PostCreateComponent {
    newPost='';
    enteredValue='jhdbfkdfhbkh';
    // onAddPost(postInput:HTMLTextAreaElement){
        onAddPost(){
        // alert('post added');
        // this.newPost=postInput.value;
        this.newPost = this.enteredValue;
        // if(!this.newPost){
        //     this.newPost="kedir kedir"
        // }
        console.log(this.newPost);
        


}
}