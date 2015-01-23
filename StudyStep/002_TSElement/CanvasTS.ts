

interface IElement {
	// X position
    X?: number;
	// Y position
    Y?: number;
	// Width
    Width?: number;
	// Height
    Height?: number;
}

interface IComment extends IElement {
	// comment brief
    CommentTitle?: string;
	// comment detail
    CommentDetail?: string;
}

interface MethodParam {
    Name: string;
    Type: string;
	Desc?: string;
};
interface Method {
    Name: string;
    Inputs: MethodParam[];
    Outputs: MethodParam[];
	Desc?: string;
};



//
// element node
//
class DElement
{
    HtmlElement: HTMLElement;
    ParentElement: HTMLElement;
    StyleClass: string;
    JsonObject: Object;

    constructor(InParentElement: HTMLElement, InJsonObject: Object) {
        this.ParentElement = InParentElement;
        this.HtmlElement = this.createElement();
        this.ParentElement.appendChild(this.HtmlElement);
        this.JsonObject = InJsonObject;
        this.flush();
    }

    start()
    {
    }

    stop()
    {
    }

    createElement(): HTMLElement {
        return document.createElement('div');
    }

    flush() {
        this.HtmlElement.style.left = this.JsonObject["X"].toString() + "px";
        this.HtmlElement.style.top = this.JsonObject["Y"].toString() + "px";
        this.HtmlElement.style.width = this.JsonObject["Width"].toString() + "px";
        this.HtmlElement.style.height = this.JsonObject["Height"].toString() + "px";
    }

}

//window.onload = () => {
//};


//
// comment node
// 
class DComment extends DElement {
    constructor(InParentElement: HTMLElement, InJsonObject: Object) {
        super(InParentElement, InJsonObject);
    }

	TitleElement:HTMLElement;
	TitleBarElement:HTMLElement;

    createElement(): HTMLElement {
        var element = document.createElement('dcomment');

		// create inner elements - titlebar and title
		this.TitleBarElement = document.createElement('dcommenttitlebar');
        element.appendChild(this.TitleBarElement);

		this.TitleElement = document.createElement('dcommenttitle');
        this.TitleBarElement.appendChild(this.TitleElement);

        return element;
    }

    flush() {
		// dcommenttitlebar's width = dcomment's width - dcomment's border
		// ?
		this.TitleBarElement.style.Width = (this.JsonObject["Width"] - 2).toString() + "px";
		// comment title
		this.TitleElement.textContent = this.JsonObject["CommentTitle"];
    }

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
        return document.createElement('dstate');
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
    var jsonComment = {
        X: 50,
        Y: 50,
        Width: 300,
        Height: 300,
        CommentTitle: "Comment Header",
        CommentDetail: "Comment Details"
    };
	var jsonState1 = {
		X: 100,
		Y: 100,
	};
 	var jsonState2 = {
		X: 200,
		Y: 200,
	};

	// generate nodes
    var comment = new DComment(container, jsonComment);
    var state1 = new DState(container, jsonState1);
    var state2 = new DState(container, jsonState2);
};