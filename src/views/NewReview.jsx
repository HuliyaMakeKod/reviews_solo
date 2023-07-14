const React = require('react');

const Layout = require('./Layout');

module.exports = function NewReview({ login }) {
  return (
    <Layout login="login">
      <link rel="stylesheet" href="/stylesheets/newReview.css" />
      <h1>Поделитесь вашим мнением тут: </h1>

      <main className="form-wrapper" role="main">

        <form method="POST" action="newReview" encType="multipart/form-data" name="newReviewForm">

          <div className='main'>
          <label htmlFor="title_input">*Заголовок:</label>
          <input id="title_input" name="title" type="text" placeholder="Дайте название отзыву" />

          <label htmlFor="fruits">*Тематика:</label>
          <select id="tematic" name="tematic">
            <option value="Красота и здоровье">Красота и здоровье</option>
            <option value="Кино">Кино</option>
            <option value="Книги">Книги</option>
          </select>

          <label htmlFor="discription_input">Описание:</label>
          <input id="discription_input" name="description" type="text" placeholder="Кратко укажите на суть отзыва" />

          <label htmlFor="type_input">*Детали:</label>
          <input id="type_input" name="type" type="text" placeholder="О чем именно вы хотите поделиться" />

          <label htmlFor="pic_input">*Фото:</label>
          <input id="pic_input" type="file" name="pic" />

          <label htmlFor="text_input">*Текст отзыва:</label>
          <textarea style={{ width: '700px' }} id="text_input" name="text" type="text" placeholder="Поделитесь вашим мнением подробнее" />

          <button type="submit" className="button">Поделиться мнением</button>
          </div>
        </form>
      </main>
    </Layout>
  );
};
