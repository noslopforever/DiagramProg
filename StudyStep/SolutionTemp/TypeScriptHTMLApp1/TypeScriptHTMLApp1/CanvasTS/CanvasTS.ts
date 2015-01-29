

interface IClass {
    ClassName: string;
    ClassDetail: string;
    Methods: IMethod[];
    Members: IMember[];
}
interface IMethod {
    MethodName: string;
    MethodDetail: string;
    Parameters: IParameter[];
}
interface IParameter {
    ParamName: string;
    ParamDetail: string;
    Output? : bool;
}
interface IMember {
    MemberName: string;
    MemberDetail: string;
}
interface ISentence {
}
interface IComment {
    CommentHeader: string;
    CommentDetail: string;
}

