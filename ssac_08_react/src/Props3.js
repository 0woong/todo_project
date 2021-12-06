// props : 사용
// props : properties
// component와 component사이에서 값을 전달할때 사용하는 객체

function Props3({number, value}){
    return(
        <article className="article">
            {number} {value}
        </article>
    );
}

export default Props3;