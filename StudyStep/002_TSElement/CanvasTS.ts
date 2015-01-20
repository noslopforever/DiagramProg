

interface IElement {
    X?: number;
    Y?: number;
    Width?: number;
    Height?: number;
}

interface IComment extends IElement {
    CommentHeader?: string;
    CommentDetail?: string;
}



//
// element node
//
class DElement
{
    HtmlElement: HTMLElement;
    ParentElement: HTMLElement;
    StyleClass: string;
    JsonObject: Object;

    // JSON
    //X: number;
    //Y: number;
    //Z: number;

    constructor(InParentElement: HTMLElement, InJsonObject: Object) {
        this.ParentElement = InParentElement;
        this.HtmlElement = this.createElement();
        this.ParentElement.appendChild(this.HtmlElement);
        this.JsonObject = InJsonObject;
        this.flush();
        //this.element.innerHTML += "The time is: ";
        //this.span = document.createElement('span');
        //this.element.appendChild(this.span);
        //this.span.innerText = new Date().toUTCString();
    }

    start()
    {
        //this.timerToken = setInterval(() =>
        //this.span.innerHTML = new Date().toUTCString()
        //, 500);
    }

    stop()
    {
        //clearTimeout(this.timerToken);
    }

    createElement(): HTMLElement {
        return document.createElement('div');
    }

    flush() {
    }

}

//window.onload = () => {
//};


//
// comment node
// 
class DComment extends DElement {
    // JSON
    //CommentHeader: string;
    //CommentDetail: string;
    //Width: number;
    //Height: number;

    constructor(InParentElement: HTMLElement, InJsonObject: Object) {
        super(InParentElement, InJsonObject);
    }

    createElement(): HTMLElement {
        var element = document.createElement('dcomment');
        return element;
    }

    flush() {
        this.HtmlElement.style.left = this.JsonObject["X"].toString() + "px";
        this.HtmlElement.style.top = this.JsonObject["Y"].toString() + "px";
        this.HtmlElement.style.width = this.JsonObject["Width"].toString() + "px";
        this.HtmlElement.style.height = this.JsonObject["Height"].toString() + "px";
    }

};


class MethodParam {
    Name: string;
    Type: string;
};
class Method {
    Name: string;
    Inputs: MethodParam[];
    Outputs: MethodParam[];
};

//
// State Node
//
class DState extends DElement {
    Method: Method;

    constructor(InParentElement: HTMLElement, InJsonObject: Object) {
        super(InParentElement, InJsonObject);
    }

    createElement(): HTMLElement {
        return document.createElement('dcomment');
    }
};

//
// Link
//
class DLink extends DElement {

    createElement(): HTMLElement {
        return document.createElement('dcomment');
    }
};


//
// window.onload
//
window.onload =
() => {
    var container = document.getElementById('container');
    var json = {
        X: 50,
        Y: 50,
        Width: 300,
        Height: 300,
        CommentHeader: "Comment Header",
        CommentDetail: "Comment Details"
    };
    var comment = new DComment(container, json);
    //var state1 = new DState(container);
    //var state2 = new DState(container);
    //comment.flush();
    //comment.HtmlElement.style = ;
};