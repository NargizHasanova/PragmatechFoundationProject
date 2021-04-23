class Person():
    def __init__(self,_name,_year):
        self.name=_name
        self.year=_year
    def intro(self):
        print('hello my name is '+ self.name)
    def calculateAge(self):
        print(2021 - self.year)
        
        
# p1=Person('nergiz',1996) 
# p2=Person('afaq',1969)
# p2.intro()
# print('my age is ')
# p2.calculateAge()

class Person():
    def __init__(self):
        print('person created')
class Student(Person):
        print('student created')
s1=Student()
p1=Person()
        
        
    
        

    
    



    


