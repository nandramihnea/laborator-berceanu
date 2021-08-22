import React, { useState } from 'react';
import classes from './Chestionar.module.css';
import Rating from '../../components/Rating/Rating';

const NUMBER_OF_QUESTIONS = 5;

const Chestionar = () => {
    const [question, setQuestion] = useState(0);

    const nextStep = () => {
        setQuestion(question + 1);
    }

    const prevStep = () => {
        setQuestion(question - 1);
    }

    const renderQuestions = (
        <>
            <div className={classes.wrapper + ` ${question !== 0 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl text-center mb-8">
                    Cât de mulțumit/ă sunteți de <span className='text-primary-7'>atitudinea personalului</span> nostru?
                </p>
                <Rating
                    number={question}
                    question='Cât de mulțumit/ă sunteți de atitudinea personalului nostru?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 1 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl text-center mb-8">
                    Cât de mulțumit/ă sunteți de <span className='text-primary-7'>modul de recoltare</span>?
                </p>
                <Rating
                    number={question + 1}
                    question='Cât de mulțumit/ă sunteți de modul de recoltare?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 2 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl text-center mb-8">
                    Cât de mulțumit/ă sunteți <span className='text-primary-7'>promptitudinea rezultatelor</span>?
                </p>
                <Rating
                    number={question + 2}
                    question='Cât de mulțumit/ă sunteți promptitudinea rezultatelor?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 3 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl text-center mb-8">
                    Cât de mulțumit/ă sunteți de <span className='text-primary-7'>forma si modul de prezentare a buletinului de rezultate</span>?
                </p>
                <Rating
                    number={question + 3}
                    question='Cât de mulțumit/ă sunteți de forma si modul de prezentare a buletinului de rezultate?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 4 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl text-center mb-8">Aveți vreo sugestie referitoare la îmbunătățirea activității noastre?</p>
                <label className='w-7/12' htmlFor='textarea'>
                    <textarea
                        autofocus
                        className={classes.textarea + ' bg-primary-3 rounded-l-3xl'}
                        name="Aveți vreo sugestie referitoare la îmbunătățirea activității noastre?"></textarea>
                </label>
            </div>
        </>
    )

    return (
        <section id="program" className={classes.section + ' bg-primary-3 relative'}>
            <div className='md:mb-14 mb-24 pt-12 pb-16 w-4/5 md:w-auto mx-auto md:mx-12 sm:mx-6'>
                <p className="pb-16 sm:mx-6 sm:text-xl text-3xl text-primary-0 tracking-wide text-right">
                    Chestionar de satisfacție
                </p>
                <form action="https://formsubmit.co/nandra.mihnea@gmail.com" method="POST">
                    {/* settings for formSubmit backend */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{display: 'none'}} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value="Răspuns nou pentru chestionarul de satisfacție!" />
                    <input type="hidden" name="_next" value="http://localhost:3000/#"></input>

                    {renderQuestions}

                    <div className={classes.buttons}>
                        {question > 0 &&
                            <p className={[classes.inapoi, classes.button, 'rounded-l-3xl'].join(' ')} onClick={prevStep}>
                                Înapoi
                            </p>
                        }
                        {question < NUMBER_OF_QUESTIONS - 1 &&
                            <p className={[classes.inainte, classes.button, 'rounded-r-3xl'].join(' ')} onClick={nextStep}>
                                Înainte
                            </p>
                        }
                        {question === NUMBER_OF_QUESTIONS - 1 &&
                            <button className={classes.submit + ' rounded-3xl'} type="submit">Trimite</button>
                        }

                    </div>

                    <p className="text-primary-0 opacity-50 mt-8 text-center">{question + 1} din 5</p>
                </form>
            </div>
        </section>
    )
}

export default Chestionar
