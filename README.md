# Events and State Self-Assessment

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Setup

1. Make sure you are in your `workspace` directory
1. `git clone {github repo SSH string}`
1. `cd` into the directory it creates
1. `code .` to open the project code
1. Use the `serve` command to start the web server
1. Open the URL provided in Chrome

## Requirements

### Initial Render

1. All 10 base dishes should be displayed as radio input options.
1. All 9 vegetables should be displayed as radio input options.
1. All 6 side dishes should be displayed as radio input options.
1. All previously purchases meals should be displayed below the meal options. Each purchase should display the primary key and the total cost of the purcahsed meal.

### State Management

1. When the user selects an item in any of the three columns, the choice should be stored as transient state.
1. When a user makes a choice for all three kinds of food, and then clicks the "Purchase Combo" button, a new sales object should be...
    1. Stored as permanent state in your local API.
    1. Represented as HTML below the **Monthly Sales** header in the following format **_exactly_**. Your output will not have zeroes, but the actual amount.
        ```html
        Receipt #1 = $00.00
        ```
   1. The user's choices should be cleared from transient state once the purchase is made.

## Design

Given the description and animation above...

1. Create an ERD for this application before you begin.
1. Make a list of what modules need to be created to make your application as modular as possible. Create a **Dependency Graph** for the project to be reviewed once you are complete with the assessment.
1. Create a **Sequence Diagram** that visualizes what your algorithm is for this project. We'll give you a minimal starting point.

```mermaid
sequenceDiagram
    participant Main
    Main->>Vegetables: Generate vegetable options
    Vegetables-->>Main: Here are some radio buttons
    participant Vegetables
    participant TransientState
    TransientState->>API: Save this dinner order
    API-->>TransientState: Order saved
    participant API
```

## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. Should transient state be represented in a database diagram? Why, or why not?
   > Your answer here
2. In the **FoodTruck** module, you are **await**ing the invocataion of all of the component functions _(e.g. sales, veggie options, etc.)_. Why must you use the `await` keyword there? Explain what happens if you remove it.
   > Your answer here
3. When the user is making choices by selecting radio buttons, explain how that data is retained so that the **Purchase Combo** button works correctly.
   > Your answer here
4. You used the `map()` array method in the self assessment _(at least, you should have since it is a learning objective)_. Explain why that function is helpful as a replacement for a `for..of` loop.
   > Your answer here

## Dependency Graph
```mermaid
flowchart TD
   Database[("API")]
   main-->FoodTruck
   FoodTruck-->Entrees
   FoodTruck-->Vegetables
   FoodTruck-->SideDishes
   FoodTruck-->Sales
   FoodTruck-->PurchaseButton
   Entrees-->Database
   Vegetables-->Database
   SideDishes-->Database
   Sales-->Database
   PurchaseButton-->Database
   TransientState-->Database
   Entrees-->TransientState
   Vegetables-->TransientState
   SideDishes-->TransientState
   Sales-->TransientState
   PurchaseButton-->TransientState
```

## Sequence Diagram
```mermaid
sequenceDiagram
   participant DOM
    participant Main
    Main->>DOM: Query container element
    DOM-->>Main: Return container element
    Main->>Main: Invoke Render function
    Main->>FoodTruck: Invoke FoodTruck function
      FoodTruck->>Entrees: Invoke Entrees function
         Entrees->>API: fetch list of entree objects
         API-->>Entrees: return list of entree objects
         Entrees->>Entrees: map entree objects to html list
      Entrees-->>FoodTruck: return entree selection html
      FoodTruck->>SideDishes: Invoke SideDishes function
         SideDishes->>API: fetch list of side dish objects
         API-->>SideDishes: return list of side dish objects
         SideDishes->>SideDishes: map side dish objects to html list
      SideDishes-->>FoodTruck: return side dish selection html
      FoodTruck->>Vegetables: Invoke Vegetables function
         Vegetables->>API: fetch list of vegetable objects
         API-->>Vegetables: return list of vegetable objects
         Vegetables->>Vegetables: map vegetable objects to html list
      Vegetables-->>FoodTruck: return vegetable selection html
      FoodTruck->>PurchaseButton: Invoke purchaseButton function
      PurchaseButton-->>FoodTruck: Return purchase button html
      FoodTruck->>Sales: invoke Sales function
         Sales->>API: fetch purchases
         API-->>Sales: return array of purchases
         Sales->>Sales: map purchase objects to html list
      Sales-->>FoodTruck: return sales html
      FoodTruck->>FoodTruck: Build Food Truck HTML
   FoodTruck-->>Main: return FoodTruck HTML
   Main->>Main: set innerHTML of container   
```