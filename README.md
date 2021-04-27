# PragmatechFoundationProject

## Translator ve assebler nədir? Compiler və interpreter ilə aralarındakı fərqlər nələrdir?
Kompyuter prosessoru ancaq maşın dilini anlaya bilir(machine language).Yəni 0 və 1-ləri.
Language translator isə bizim hər hansısa proqramlaşdırılma dilində yazdığımız kodu machine language-in anlamağı üçün tercume edir.

### Language translator-ların növləri
- compiler
- interpreter
Compiler high-level language-i(insan dilinə ən yaxın dil) machine language-e translate edir.Compiler bütün kodu birdən yoxlayır və agər səhv taparsa hec bir kodu calışdırmır.(C#)
İnterpreter isə hər bir sətri sıra ilə oxuyub ekranda calışdırır,hər hansısa bir səhv(error) qarşısına cıxana qədər(Javascript,PHP). Bizim isletdiyimiz brauzer ele interpretatordu.Assembler-proqram transyatorudu,assembler dilindəki mətnin maşın dilindəki proqrama.

## Rəqəm və ədədlərin maşın dilinə tərcümə olunma prosesini bilirik. Bəs hərflər və simvollar necə tərcümə olunur?
ASCII vasitəsi ilə.ASCII(American standard code for information interchange)- amerikalıların icra etdiyi hərflər və simvollar üçün bir kod standartıdı .


## Günümüzdə istifadə olunan Js,PHP,Python və C# dillərində ortaq istifadə olunan data növləri hansılardır və qısaca izahatlarını yazın

- integer (rəqəm)
- string (sətr)
- boolean (true,false)(doğru/yalnış)
- null (boşluq)
- array (massiv)

## Type Conversion ya da Type Casting nədir? Hansı hallarda ehtiyac duyulur?

Bir data type-i digər data typ-a keçməsi type conversion demekdi.Məsələn stringi integer-ə,integeri bolean-ə və s.
Type casting-in nə olduğunu tam olaraq anlaya bilmədim.

## Operator precedence nədir və əhəmiyyətini izah edin
operator üstünlüyü deməkdir.Kodun oxunması zamanı bir operand digər operantdan üstünolarsa ilk o operator isləmi yerinə yetirilir. 

## Automatic Type Conversion ve Type Conversion Methodlar arasındakı fərqləri izah edin.

Fərq ondadırki automatic type-da conversion avtomatik olur.Yəni bizim type deyisdirmek üçün əlavə bir kod yazmağa ehtyyacımız olmur.

# Python

## CMD command line

Командная строка windows - это отдельное ПО, которое входит в состав Операционной Системы и обеспечивает взаимосвязь между пользователем и ОС.Командная строка запускается в своей оболочке и предназначена для более опытных пользователей и помогает в таких сложных ситуациях, когда другие команды уже не работают. Например, через командную строку вводят команды в случае заражения вирусами или "поломки" системных файлов, а так же восстановление windows.

### cmd basic commands
- cd (cd foo)
Change Directory.Change your current directory to the destination specified within the command. Say you want to go to a folder named 'foo', you type: cd foo
- cd .. (cd ..)
(To head back to the previous directory or go one level up of the current directory)
- mkdir (mkdir foo).This command creates a new directory with the specified name.
- rmdir (rmdir directoryname) Deletes a directory.
- copy(copy index.html about.html) Type cp command or copy, if you want to copy a file or folder
- dir You can use the DIR command to list the files and folders in the directory.

## INPUT,ALGORITHM,OUTPUT

We often have a need to interact with users, either to get data or to provide some sort of result. Most programs today use a dialog box as a way of asking the user to provide some type of input. While Python does have a way to create dialog boxes, there is a much simpler function that we can use. Python provides us with a function that allows us to ask a user to enter some data and returns a reference to the data in the form of a string. The function is called input.

Python’s input function takes a single parameter that is a string. This string is often called the prompt because it contains some helpful text prompting the user to enter something. For example, you might call input as follows:

aName = input('Please enter your name: ')

## Her hanisa proqramlasdirma dili oyrendikde nelere diqqet elemeliyik:

- variable
- data type
- operators
- conditions
- loops
- data structute(array,object)
- functions

## OOP nedir?
Obyektler arasinda unsiyyetin temin olunmasi ile her hansisa bir proqramin yazilmasini temin eden bir proqramlasdirma metodudur.

## constructor-object istehsal eden funksiyadir


