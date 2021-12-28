import React, { useState, useEffect } from 'react';
import classes from './Chestionar.module.css';
import Rating from '../../components/Rating/Rating';

const NUMBER_OF_QUESTIONS = 6;

const Chestionar = () => {
    const [question, setQuestion] = useState(0);
    const [isInputDirty, setIsInputDirty] = useState(false);
    const [shouldShowNext, setShouldShowNext] = useState(false);

    const nextStep = () => {
        setQuestion(question + 1);
        setIsInputDirty(false);
    }

    const onChangeHandler = (value) => {
        if(value !== '') {
            setIsInputDirty(true);
        } else {
            setIsInputDirty(false);
        }
    }

    useEffect(() => {
        if(isInputDirty) {
            setShouldShowNext(true);
        } else {
            setShouldShowNext(false);
        }
    }, [isInputDirty])

    const renderQuestions = (
        <>
            <div className={classes.wrapper + ` ${question !== 0 ? 'hidden' : 'grid'}`}>
                <label
                    className="text-primary-8 text-2xl sm:text-lg text-center mb-8" >
                        Cum vă numiți?
                    <input
                        type="text"
                        name="Nume"
                        onChange={e => onChangeHandler(e.target.value)}
                        className={classes.nume + " pb-2 bg-primary-3 text-3xl sm:text-xl"} />
                </label>
            </div>
            <div className={classes.wrapper + ` ${question !== 1 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl sm:text-lg text-center mb-8">
                    Cât de mulțumit/ă sunteți de <span className='text-primary-8'>atitudinea personalului</span> nostru?
                </p>
                <Rating
                    setIsInputDirty={setIsInputDirty}
                    number={question}
                    question='Cât de mulțumit/ă sunteți de atitudinea personalului nostru?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 2 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl sm:text-lg text-center mb-8">
                    Cât de mulțumit/ă sunteți de <span className='text-primary-8'>modul de recoltare</span>?
                </p>
                <Rating
                    setIsInputDirty={setIsInputDirty}
                    number={question + 1}
                    question='Cât de mulțumit/ă sunteți de modul de recoltare?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 3 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl sm:text-lg text-center mb-8">
                    Cât de mulțumit/ă sunteți <span className='text-primary-8'>promptitudinea rezultatelor</span>?
                </p>
                <Rating
                    setIsInputDirty={setIsInputDirty}
                    number={question + 2}
                    question='Cât de mulțumit/ă sunteți promptitudinea rezultatelor?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 4 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl sm:text-lg text-center mb-8">
                    Cât de mulțumit/ă sunteți de <span className='text-primary-8'>forma si modul de prezentare a buletinului de rezultate</span>?
                </p>
                <Rating
                    setIsInputDirty={setIsInputDirty}
                    number={question + 3}
                    question='Cât de mulțumit/ă sunteți de forma si modul de prezentare a buletinului de rezultate?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 5 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl sm:text-lg text-center mb-8">Aveți vreo sugestie referitoare la îmbunătățirea activității noastre?</p>
                <label className='w-7/12 sm:w-full' htmlFor='textarea'>
                    <textarea
                        autoFocus
                        className={classes.textarea + ' bg-primary-3 rounded-l-3xl'}
                        name="Aveți vreo sugestie referitoare la îmbunătățirea activității noastre?"></textarea>
                </label>
            </div>
        </>
    )

    return (
        <section id="chestionar" className={classes.section + ' bg-primary-3 relative'}>
            <div className='md:mb-14 mb-24 pb-16 w-4/5 md:w-auto mx-auto md:mx-12 sm:mx-6'>
                <h1 className="pb-28 md:pb-20 sm:pb-14 pt-24 md:pt-16 sm:pt-12 sm:mx-6 sm:text-xl text-3xl text-neutral-0 tracking-wide text-right">
                    Chestionar de satisfacție
                </h1>
                <form action="https://formsubmit.co/laboratorberceanu@gmail.com" method="POST">
                    {/* settings for formSubmit backend */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{display: 'none'}} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value="Răspuns nou pentru chestionarul de satisfacție!" />
                    <input type="hidden" name="_next" value="http://localhost:3000/#chestionar"></input>

                    {renderQuestions}

                    <div className={classes.buttons}>
                        {question < NUMBER_OF_QUESTIONS - 1 &&
                            <p className={[classes.inainte, classes.button, `${!shouldShowNext && 'invisible'} rounded-r-3xl sm:mt-8`].join(' ')} onClick={nextStep}>
                                Înainte
                            </p>
                        }
                        {question === NUMBER_OF_QUESTIONS - 1 &&
                            <button className={classes.submit + ' rounded-3xl sm:mt-8'} type="submit">Trimite</button>
                        }

                    </div>

                    <p className="text-neutral-0 opacity-90 mt-8 text-center">{question + 1} din 6</p>
                </form>
            </div>
        </section>
    )
}

export default Chestionar
