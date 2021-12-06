// props : 사용
// props : properties
// component와 component사이에서 값을 전달할때 사용하는 객체

function props(Props){
    return(
        <article className="article">
            {props.number}
        </article>
    );
}

export default props;