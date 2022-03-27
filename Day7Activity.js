// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
    constructor(title,studio,rating='PG')//rating will default to PG if not provided in input data
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;

        // console.log(title,studio,rating)
    }

    static getPG(...movies)//this function takes in array of Movie instances 
    {
        let newMovieList=[];//array containing required movies on condition
        for (let i = 0; i < sample.length; i++) {
            if(sample[i].rating==='PG')//if movie rating is PG
            {
               newMovieList.push(sample[i]);//we push that movie details to new array
            }
        }
        return newMovieList;
    }
}
let movie1 = new Movie('Casino Royale','Eon Productions','PG13');//created 3 instances of Movie class
let movie2 = new Movie('Intersteller','Syncopy','PG');
let movie3 = new Movie('Forrest Gump','Paramount Pictures');

let sample= [movie1,movie2,movie3];//pushing objects to array 
console.log(Movie.getPG(sample));//calling getPG function with array of objects as argument
//Output:
// [
//     Movie { title: 'Intersteller', studio: 'Syncopy', rating: 'PG' },
//     Movie {
//       title: 'Forrest Gump',
//       studio: 'Paramount Pictures',
//       rating: 'PG'
//     }
//   ]


// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius,color)//declaring requrired variables
    {
        this.radius=radius;
        this.color=color;
    }
    Circle()
    {
        console.log('Class Circle created to calculate area and cicumference of circle.');
    }
    Circle(radius)
    {
        this.radius=radius;
    }
    Circle(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    getRadius()
    {
        return `Radius: ${this.radius}`;
    }
    setRadius(radius)
    {
        this.radius=radius;
    }
    getColor()
    {
        return `Color: ${this.color}`;
    }
    setColor(color)
    {
        this.color=color;
    }
    toString()
    {
        return `Radius: ${this.radius} Color: ${this.color}`;
    }
    getArea()
    {
        let area = 3.1415*this.radius*this.radius;
        return `Area of circle: ${area}`
    }
    getCircumference()
    {
        let circumference = 2*3.1415*this.radius;
        return `Circumference: ${circumference}`;
    }
}
let circle1 = new Circle();//creating object circle1 for Circle class
circle1.setColor('Blue');
circle1.setRadius(2);
console.log(circle1.getArea());//claculates and returns area
console.log(circle1.getCircumference());//calculates and returns circumference
//Output:
// Area of circle: 12.566
// Circumference: 12.566



// 3. Write a “person” class to hold all the details.

class Person {
    constructor(name,age,education,address,phone)
    {
        this.name=name;
        this.age=age;
        this.education=education;
        this.address=address;
        this.phone=phone;
    }
    getDetails()
    {
        console.log(`
        Name:${this.name}
        Age:${this.age}
        Education:${this.education}
        Address:${this.address}
        Phone:${this.phone}
        `);
    }
}

let person1 = new Person('Osama',25,'B.Tech.','Uttar Pradesh','588694');

person1.getDetails();
//Output:
// Name:Osama
// Age:25
// Education:B.Tech.
// Address:Uttar Pradesh
// Phone:588694


//4. write a class to calculate uber price.

class UberPrice
{
    constructor(distance)
    {
        distance = this.distance; 
    }
    caclulateDistance(distance)//function to calculate charge
    {
        let baseFare = 50;
        let perKmFare = 20;
        if(distance<=2)
        {
            console.log(`Total chareges: ${baseFare}`);
        }
        else//if distance is more than 2km
        {
            let totalCharges=baseFare+(distance-2)*perKmFare;//baseFare+cost on remaining distance
            console.log(`Total charges: ${totalCharges}`);//output
        }
    }

}

let passenger = new UberPrice();
passenger.caclulateDistance(5);
//Output:
// Total charges: 110
