from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import  datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///nargiz.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    text = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return '<Article %r>' % self.id


@app.route(('/'))
def index():
    return render_template('index.html')


@app.route(('/about-bleeding'))
def about_bleeding():
    return render_template('about-bleeding.html')


@app.route(('/about-bone-injuries'))
def about_bone_injuries():
    return render_template('about-bone-injuries.html')


@app.route(('/about-epilepsy'))
def about_epilepsy():
    return render_template('about-epilepsy.html')


@app.route(('/about-food-stuck'))
def about_food_stuck():
    return render_template('about-food-stuck.html')


@app.route(('/about-infarkt'))
def about_infarkt():
    return render_template('about-infarkt.html')


@app.route(('/about-insult'))
def about_insult():
    return render_template('about-insult.html')


@app.route(('/about-us'))
def about_us():
    return render_template('about-us.html')


@app.route(('/blog-form'))
def blog_form():
    return render_template('blog-form.html')


@app.route(('/posts'))
def posts():
    articles = Article.query.all()
    return render_template('posts.html', articles=articles)


@app.route('/posts/<int:id>')
def post_detail(id):
    article = Article.query.get(id)
    return render_template('post_detail.html', article=article)


@app.route('/posts/<int:id>/del')
def post_delete(id):
    article = Article.query.get_or_404(id)
    try:
        db.session.delete(article)
        db.session.commit()
        return redirect('/posts')
    except:
        return "Some unusual ERROR came out,can not delete post"


@app.route('/posts/<int:id>/update', methods=['POST', 'GET'])
def post_update(id):
    article = Article.query.get_or_404(id)
    if request.method == "POST":
        article.title = request.form['title']
        article.text = request.form['text']

        try:
            db.session.commit()
            return redirect('/')
        except:
            return "Some unusual ERROR came out,can not update post"
    else:
        return render_template('post_update.html', article=article)


@app.route('/blog-form', methods=['POST', 'GET'])
def blog_create():
    if request.method == "POST":
        title = request.form['title']
        text = request.form['text']

        article = Article(title=title, text=text)

        try:
            db.session.add(article)
            db.session.commit()
            return redirect('/')
        except:
            return "Some unusual ERROR came out"
    else:
        return render_template('/')


if __name__ == "__main__":
    app.run(debug=True)