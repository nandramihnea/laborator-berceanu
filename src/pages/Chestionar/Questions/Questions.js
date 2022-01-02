import React from 'react';
import Rating from '../../../components/Rating/Rating';
import classes from './Questions.module.css';

const Questions = ({question, setIsInputDirty, setFormData, formData}) => {

    const onChangeHandler = (event) => {
        setFormData({
            ...formData,
            nume: event.target.value
        })
        if(event.target.value !== '') {
            setIsInputDirty(true);
        } else {
            setIsInputDirty(false);
        }
    }

    return (
        <>
            <div className={classes.wrapper + ` ${question !== 0 ? 'hidden' : 'grid'}`}>
                <label
                    className="text-primary-5 text-2xl sm:text-lg text-center mb-8"
                    htmlFor="Nume" >
                        Cum vă numiți?
                </label>
                <input
                    type="text"
                    name="Nume"
                    onChange={onChangeHandler}
                    className={classes.nume + " pb-2 bg-primary-3 text-3xl sm:text-xl"} />
            </div>
            <div className={classes.wrapper + ` ${question !== 1 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl sm:text-lg text-center mb-8">
                    Cât de mulțumit/ă sunteți de <span className='text-primary-7'>atitudinea personalului</span> nostru?
                </p>
                <Rating
                    setIsInputDirty={setIsInputDirty}
                    number={question}
                    question='Cât de mulțumit/ă sunteți de atitudinea personalului nostru?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 2 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl sm:text-lg text-center mb-8">
                    Cât de mulțumit/ă sunteți de <span className='text-primary-7'>modul de recoltare</span>?
                </p>
                <Rating
                    setIsInputDirty={setIsInputDirty}
                    number={question + 1}
                    question='Cât de mulțumit/ă sunteți de modul de recoltare?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 3 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl sm:text-lg text-center mb-8">
                    Cât de mulțumit/ă sunteți <span className='text-primary-7'>promptitudinea rezultatelor</span>?
                </p>
                <Rating
                    setIsInputDirty={setIsInputDirty}
                    number={question + 2}
                    question='Cât de mulțumit/ă sunteți promptitudinea rezultatelor?' />
            </div>
            <div className={classes.wrapper  + ` ${question !== 4 ? 'hidden' : 'grid'}`}>
                <p className="text-primary-0 text-2xl sm:text-lg text-center mb-8">
                    Cât de mulțumit/ă sunteți de <span className='text-primary-7'>forma si modul de prezentare a buletinului de rezultate</span>?
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
}

export default Questions
