// 객체 : {props.children}
// 구조 분해 할당 : {children}

function Section(props, children){
    return(
        <section className="section">
            {props.children}
        </section>
    )
}

export default Section;