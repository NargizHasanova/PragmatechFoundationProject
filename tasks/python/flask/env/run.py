from flask import Flask,render_template,redirect
app=Flask(__name__)

books=[

]

class Book():
    def __init__(self,_name):
        self.ad=_name
#kitablarin siyahisi
@app.route('/')
def index():
    return render_template('index.html',siyahi=books)

@app.route('/add',methods=['GET','POST'])
def add():
    global id

    if request.method=='POST':
        book=Book(request.form['ad'])
        books.append(book)
        id+=1
        return redirect ('/')
    return render_template('add.html')

@app.route('/delete/<id>')
def delete(id):
    
    for user in users:
        if user.id==int(id):
            users.remove(user)
            
            return redirect('/')
    return redirect('/')

app.run(debug=True)
    