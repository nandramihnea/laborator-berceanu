import React, {useState} from 'react';
import Tab from '../../components/Tabs/Tab/Tab';
import Tabs from '../../components/Tabs/Tabs';

const Instructiuni = () => {
    const tabs = [
        'Recoltarea Sângelui',
        'Sumar de urină',
        'Urocultură',
        'Dozări chimice cantitative din urină',
        'Sediment Addis-Hamburger',
        'Coprocultură',
        'Examen coproparazitologic',
        'Depistarea hemoragiilor oculte',
        'Exudat Faringian',
        'Spută'
    ];

    const [selected, setSelected] = useState(0);

    const handleSelectedItem = (index) => {
        setSelected(index);
    }

    return (
        <section className='md:my-24 my-48 w-4/5 md:w-auto mx-auto md:mx-12 sm:mx-6' id="instructiuni-recoltare">
            <p className="sm:text-xl text-3xl text-primary-4 tracking-wide sm:mb-14 mb-28 mt-24 text-right">
                Instrucțiuni privind recoltarea<br /> probelor biologice
                <span className="sm:ml-0 ml-2 sm:text-base text-2xl" role="img" aria-label="emoji" >🩸</span>
            </p>
            <Tabs
                tabs={tabs}
                selected={selected}
                setSelectedItem={handleSelectedItem}
                >
                    <Tab isSelected={selected === 0}>
                        <ul>
                            <li className="mb-2">Se face dimineaţa, înainte de consumul unor alimente sau lichide (mai ales dulci)</li>
                            <li className="mb-2">– repaus alimentar 12-18 ore, pentru a nu denatura rezultatele unor analize cum ar fi spre exemplu: glicemia, colesterolul sau trigliceridele.</li>
                        </ul>
                    </Tab>

                    <Tab isSelected={selected === 1}>
                        <p>Recoltarea se face din prima urină de dimineaţă, într-un recipient de unică folosinţă (furnizat de laborator sau achiziţionat de la farmacie)</p>
                    </Tab>

                    <Tab isSelected={selected === 2}>
                        <ul>
                            <li className="mb-2">Se recoltează prima urină de dimineaţă sau la cel puţin 4 ore de la ultima micţiune</li>
                            <li className="mb-2">După o toaletă locală riguroasă cu apă şi săpun, se recoltează jetul mijlociu 20 - 30 ml (fără a întrerupe fluxul urinar) într-un recipient steril</li>
                            <li className="mb-2">Evitaţi contactul interiorului sau marginilor recipientului de plastic cu pielea mâinilor, coapselor sau ariei genitale, pentru a scădea riscul de contaminare cu microorganisme comensale de pe piele</li>
                            <li className="mb-2">Închideţi etanş capacul recipientului după recoltare</li>
                            <li className="mb-2">Recipientul se aduce la laborator în maxim 2 ore de la recoltare, altfel se menţine la rece (frigider sau geantă termoizolantă cu acumulatori de frig) din momentul recoltării şi pe durata transportului la laborator</li>
                            <li className="mb-2">*La sugar şi copilul mic care nu are controlul voluntar al micţiunii sau alţi pacienţi necooperanţi la care recoltarea este dificilă, se utilizează pungi de plastic sterile autoadezive (sunt furnizate de laborator sau se pot achiziţiona de la farmacie)</li>
                            <li className="mb-2">Recoltarea se efectuează înainte de administrarea chimioterapicelor antiinfecţioase (antibiotice, antifungice) sau la 10-14 zile după tratament</li>
                            <li className="mb-2">În cazul în care aceasta nu este posibil, se va recolta produsul înaintea administrării următoarei doze de antibiotic</li>
                        </ul>
                    </Tab>

                    <Tab isSelected={selected === 3}>
                        <ul>
                            <li className="mb-2">Se recoltează urina pe parcursul a 24 ore (ex. de la ora 6 dimineaţa până a doua zi la aceeaşi oră), într-un recipient curat de volum corespunzător</li>
                            <li className="mb-2">Recipientul cu urină se păstrează de-a lungul celor 24 de ore la rece</li>
                        </ul>
                    </Tab>

                    <Tab isSelected={selected === 4}>
                        <ul>
                            <li className="mb-2">Prima urina emisă se aruncă</li>
                            <li className="mb-2">Se bea un pahar de 250 ml apă sau ceai şi se stă culcat la pat timp de 3 ore</li>
                            <li className="mb-2">Toată urina din acest interval de timp va fi recoltată într-un recipient curat de volum corespunzător</li>
                        </ul>
                    </Tab>

                    <Tab isSelected={selected === 5}>
                        <ul>
                            <li className="mb-2">Din scaunul proaspăt emis se recoltează din porţiunile cu aspect modificat (mucus, sânge, puroi) </li>
                            <li className="mb-2">Dacă acestea lipsesc se recoltează din trei locuri diferite o cantitate mică de materii fecale</li>
                            <li className="mb-2">Se utilizează coprorecoltoare sterile de unică folosinţă</li>
                            <li className="mb-2">Recoltarea se efectuează înainte de administrarea chimioterapicelor antiinfecţioase (antibiotice, antifungice) sau la 10-14 zile după tratament</li>
                            <li className="mb-2">În cazul în care aceasta nu este posibil, se va recolta produsul înaintea administrării următoarei doze de antibiotic</li>
                        </ul>
                    </Tab>

                    <Tab isSelected={selected === 6}>
                        <ul>
                            <li className="mb-2">Se impune recoltarea fecalelor în coprorecoltor fără mediu de conservare şi transport (furnizate de laborator)</li>
                            <li className="mb-2">Se recoltează 3 probe în interval de 10 zile, preferabil din scaunul de dimineaţă</li>
                            <li className="mb-2">Dacă se recoltează seara, se păstrează recipientul cu proba la frigider</li>
                        </ul>
                    </Tab>

                    <Tab isSelected={selected === 7}>
                        <ul>
                            <li className="mb-2">Se ține o dietă fără carne timp de 3 zile</li>
                            <li className="mb-2">Se recoltează în coprorecoltoare fără mediu de conservare şi transport (furnizate de laborator)</li>
                        </ul>
                    </Tab>

                    <Tab isSelected={selected === 8}>
                        <ul>
                            <li className="mb-2">Recoltarea se face dimineaţa</li>
                            <li className="mb-2">Nu se bea, nu se fumează, nu se mănâncă și nu se spală pe dinți înainte de recoltare</li>
                            <li className="mb-2">La nevoie se poate recolta la 3-4 ore după toaleta cavităţii bucale sau ingestia de alimente</li>
                            <li className="mb-2">Recoltarea se efectuează înainte de administrarea chimioterapicelor antiinfecţioase (antibiotice, antifungice) sau la 10-14 zile după tratament</li>
                            <li className="mb-2">În cazul în care aceasta nu este posibil, se va recolta produsul înaintea administrării următoarei doze de antibiotic</li>
                        </ul>
                    </Tab>

                    <Tab isSelected={selected === 9}>
                        <ul>
                            <li className="mb-2">Recoltarea se face dimineaţa</li>
                            <li className="mb-2">După periajul dinţilor, clătirea energică a gurii şi gargara cu apa, pacientul expectorează într-un recipient steril de unică folosinţă (furnizat de laborator)</li>
                            <li className="mb-2">Se transportă cât mai rapid la laborator</li>
                            <li className="mb-2">Recoltarea se efectuează înainte de administrarea chimioterapicelor antiinfecţioase (antibiotice, antifungice) sau la 10-14 zile după tratament</li>
                            <li className="mb-2">În cazul în care aceasta nu este posibil, se va recolta produsul înaintea administrării următoarei doze de antibiotic</li>
                        </ul>
                    </Tab>
            </Tabs>
        </section>
    )
}

export default Instructiuni;
