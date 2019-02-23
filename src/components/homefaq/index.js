import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const HomeFaq = (props) => {
	
    const isMobile = props.isMobile;
    const faqData = props.faqData;

    const buildFaq = (faqData) => {
        if (!faqData) {
            return console.error("FAQDATA UNDEFINED")
        }

        return (
            <div>
                {faqData.map( (faqElement) => {
                    return (
                        <div>
                            <div class={style.mobileFaqHeadline}>{faqElement.headline}</div>
                            <p class={style.mobileFaqParagraph}>{faqElement.paragraph}</p>
                        </div>
                    )
            } )}
            </div>
        )
    }
            //DEBUG **** ****** REFACTOR ***** DISPLAY MOCKfaq
	if (isMobile) {
		return (
			<div class={style.mobileFaqCont}>
                <div>
                    {buildFaq(faqData)}
                </div>
            </div>
		);
	  } else {
		return (
			<div class={style.dsktopFaqCont}>
				<p>faq Desktop</p>
			</div>
		);
	}
}

export default HomeFaq;
