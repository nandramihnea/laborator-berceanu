import React, { useState, useEffect } from 'react';
import classes from './Chestionar.module.css';
import ThankYou from '../ThankYou/ThankYou';
import Questions from './Questions/Questions';

const NUMBER_OF_QUESTIONS = 6;
const EMAIL = "https://formsubmit.co/nandra.mihnea@gmail.com";

const Chestionar = () => {
    const [question, setQuestion] = useState(0);
    const [isInputDirty, setIsInputDirty] = useState(false);
    const [shouldShowNext, setShouldShowNext] = useState(false);
    const [shouldShowThankYou, setShouldShowThankYou] = useState(false);
    const [formData, setFormData] = useState({
        nume: '',
    })

    const nextStep = () => {
        setQuestion(question + 1);
        setIsInputDirty(false);
    }

    const handleSubmit = (event) => {
        // event.preventDefault();
        setShouldShowThankYou(true);
        // const request = fetch(EMAIL, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({ ...formData })
        // });

        // request
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         setShouldShowThankYou(true);
        //     })
        //     .catch(error => console.log(error))
    }

    useEffect(() => {
        if(isInputDirty) {
            setShouldShowNext(true);
        } else {
            setShouldShowNext(false);
        }
    }, [isInputDirty])

    return (
        <section id="chestionar" className={classes.section + ' bg-primary-3 relative'}>
            <div
                className={classes.chestionar + ` pb-16 w-4/5 md:w-auto mx-auto md:mx-12 sm:mx-6 tracking-wide ${shouldShowThankYou ? 'invisible' : undefined}`}>
                    <p className="pb-28 md:pb-20 sm:pb-14 pt-24 md:pt-16 sm:pt-12 sm:mx-6 sm:text-xl text-3xl text-primary-0 tracking-wide text-right">
                        Chestionar de satisfacție
                    </p>
                    <form
                        action={EMAIL}
                        method="POST">
                            {/* settings for formSubmit backend */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="text" name="_honey" style={{display: 'none'}} />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_subject" value="Răspuns nou pentru chestionarul de satisfacție!" />

                            <Questions
                                question={question}
                                setIsInputDirty={setIsInputDirty}
                                setFormData={setFormData}
                                formData={formData} />

                            <div className={classes.buttons}>
                                {question < NUMBER_OF_QUESTIONS - 1 &&
                                    <p className={[classes.inainte, classes.button, `${shouldShowNext ? undefined : 'invisible'} rounded-r-3xl sm:mt-8`].join(' ')} onClick={nextStep}>
                                        Înainte
                                    </p>
                                }
                                {question === NUMBER_OF_QUESTIONS - 1 &&
                                    <button
                                        className={classes.submit + ' rounded-3xl sm:mt-8'}
                                        onClick={handleSubmit}
                                        type="submit" >
                                            Trimite
                                    </button>
                                }
                            </div>

                            <p className="text-primary-0 opacity-50 mt-8 text-center">{question + 1} din 6</p>
                    </form>
            </div>
            <ThankYou shouldShow={shouldShowThankYou} />
        </section>
    )
}

export default Chestionar
