import React, { useEffect } from "react";
import styles from "./policyStyles.module.scss";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class={styles.container}>
      <h1>Polityka Prywatności Mercury Arts - GEORGIY ZALETSKI</h1>
      <p className={styles.p}>
        Mercury Arts - GEORGIY ZALETSKI szanuje Twoją prywatność i zobowiązuje
        się do ochrony Twoich danych osobowych zgodnie z Rozporządzeniem Ogólnym
        o Ochronie Danych (RODO). Niniejsza polityka prywatności wyjaśnia, jak
        zbieramy, wykorzystujemy, ujawniamy i chronimy Twoje dane osobowe
        podczas interakcji z naszą firmą.
      </p>

      <h2>Informacje Kontaktowe</h2>
      <ul className={styles.ul}>
        <li>Nazwa firmy: Mercury Arts - GEORGIY ZALETSKI</li>
        <li>NIP: 7011208239</li>
        <li>REGON: 528821567</li>
        <li>Adres: Raszynska 32, 114, 02-026, Warszawa, Polska</li>
        <li>E-mail: mercuryartspolska@gmail.com</li>
        <li>Telefon: +48 459 569 775</li>
      </ul>

      <h2>1. Jakie dane zbieramy?</h2>
      <p className={styles.p}>Możemy zbierać i przetwarzać następujące dane:</p>
      <ul className={styles.ul}>
        <li>Imię i nazwisko</li>
        <li>Adres e-mail</li>
        <li>Numer telefonu</li>
        <li>Inne informacje, które dobrowolnie nam przekażesz</li>
      </ul>

      <h2>2. Cele przetwarzania danych</h2>
      <p className={styles.p}>
        Twoje dane będą wykorzystywane do następujących celów:
      </p>
      <ul className={styles.ul}>
        <li>Przetwarzanie zapytań i odpowiedzi na Twoje wiadomości</li>
        <li>Informowanie o naszych produktach i usługach</li>
        <li>Poprawa jakości naszych usług</li>
        <li>Spełnianie wymogów prawnych</li>
      </ul>

      <h2>3. Podstawy prawne przetwarzania danych</h2>
      <p className={styles.p}>
        Przetwarzamy Twoje dane na następujących podstawach prawnych:
      </p>
      <ul className={styles.ul}>
        <li>Twoja zgoda (art. 6(1)(a) RODO)</li>
        <li>Niezbędność do wykonania umowy (art. 6(1)(b) RODO)</li>
        <li>Spełnianie naszych obowiązków prawnych (art. 6(1)(c) RODO)</li>
        <li>Nasze uzasadnione interesy (art. 6(1)(f) RODO)</li>
      </ul>

      <h2>4. Przekazywanie danych stronom trzecim</h2>
      <p className={styles.p}>
        Nie przekazujemy Twoich danych stronom trzecim, chyba że jest to
        konieczne do wykonania naszych zobowiązań wobec Ciebie lub jest to
        wymagane prawem.
      </p>

      <h2>5. Przechowywanie danych</h2>
      <p className={styles.p}>
        Przechowujemy Twoje dane nie dłużej niż jest to konieczne do realizacji
        celów, dla których zostały zebrane, lub zgodnie z wymogami prawnymi.
      </p>

      <h2>6. Twoje prawa</h2>
      <p className={styles.p}>
        Zgodnie z RODO, przysługują Ci następujące prawa:
      </p>
      <ul className={styles.ul}>
        <li>Prawo dostępu do Twoich danych</li>
        <li>Prawo do sprostowania danych</li>
        <li>Prawo do usunięcia danych („prawo do bycia zapomnianym”)</li>
        <li>Prawo do ograniczenia przetwarzania</li>
        <li>Prawo do przenoszenia danych</li>
        <li>Prawo do sprzeciwu wobec przetwarzania danych</li>
        <li>Prawo do wycofania zgody w dowolnym momencie</li>
      </ul>

      <h2>7. Bezpieczeństwo danych</h2>
      <p className={styles.p}>
        Podejmujemy wszelkie niezbędne środki techniczne i organizacyjne w celu
        ochrony Twoich danych przed nieuprawnionym dostępem, zmianą, ujawnieniem
        lub zniszczeniem.
      </p>

      <h2>8. Zmiany w polityce prywatności</h2>
      <p className={styles.p}>
        Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce
        prywatności. Powiadomimy Cię o wszelkich zmianach, publikując
        zaktualizowaną wersję na naszej stronie internetowej.
      </p>

      <h2>Kontakt</h2>
      <p className={styles.p}>
        Jeśli masz pytania lub uwagi dotyczące naszej polityki prywatności,
        prosimy o kontakt:
      </p>
      <ul className={styles.ul}>
        <li>E-mail: [proszę podać adres e-mail]</li>
        <li>Telefon: [proszę podać numer telefonu]</li>
      </ul>

      <h2>Postanowienia końcowe</h2>
      <p className={styles.p}>
        Niniejsza polityka prywatności stanowi integralną część wszystkich
        stosunków umownych z Mercury Arts - GEORGIY ZALETSKI. Zachęcamy do
        dokładnego zapoznania się z tym dokumentem i kontaktu z nami w razie
        jakichkolwiek pytań lub w celu uzyskania dodatkowych informacji.
      </p>

      <p className={styles.p}>Georgiy Zaletski</p>
      <p className={styles.p}>Mercury Arts - GEORGIY ZALETSKI</p>
    </div>
  );
};

export default Policy;
