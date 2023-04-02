import React, { useState } from "react";

const Form = () => {

const [inputValue, setInputValue] = useState("");
const [inputValueNumber, setInputValueNumber] = useState("");

const handleInputChange = (event) => {
      const re = /^[А-ЩЬЮЯЄІЇҐа-щьюяєіїґўїҐёЁ\s]*$/; // регулярное выражение для проверки на буквы и пробелы
    if (event.target.value === "" || re.test(event.target.value)) {
        setInputValue(event.target.value);
    }
};
const handleInputChangeNumber = (event) => {
    const red = /^[0-9\b]+$/; // регулярное выражение для проверки на цифры
    if (event.target.value === "" || red.test(event.target.value)) {
        setInputValueNumber(event.target.value);
    }
};

return (
    <section className="form" >
        <div className="form__link">
        </div>
        <div className="form__title">
            Заповни в декілька кліків
        </div>
        <div className="form__subtitle">
            Відправ, будь ласка, для нас це важливо.
        </div>

        <form id="form">
            <div className="username">
                <div className="username__item">
                    <label className="label" htmlFor="first-name">Ім'я</label>
                    <input
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text"
                        id="first-name"
                        name="first-name"
                        placeholder="Ім'я"
                        required
                        />
                </div>
                <div className="username__item">
                    <label className="label" htmlFor="last-name">Прізвище</label>
                    <input
                        // value={inputValue}
                        onChange={handleInputChange}
                        type="text"
                        id="last-name"
                        name="last-name"
                        placeholder="Прізвище"
                        />
                </div>
            </div>

            <div className="email">
                    <label className="label" htmlFor="email">Email</label>
                    <input
                        className="input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        />
            </div>

            <div className="phone">
                    <label className="label" htmlFor="phone">Номер телефону (мобільний)</label>
                    <input
                        value={inputValueNumber}
                        onChange={handleInputChangeNumber}
                        className="input"
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{10}"
                        placeholder="068-123-23-21"
                        required
                        />
            </div>

            <div className="message">
                    <label className="label" htmlFor="message">Повідомлення та коментарі</label>
                    <textarea  name="message" form="form" id="message" placeholder="Залиш повідомлення..."></textarea>
            </div>

            <div className="privacy">
                <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    />
                <label htmlFor="privacy" required>Я згоден(згодна) з <a href="/privacy-policy">політокою конфеденційності</a>.</label>
            </div>
            <button type="submit">Відправ повідомлення</button>
        </form>
    </section>
    );
}
export default Form