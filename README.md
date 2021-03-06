# Delivery cost application

Towns was generated from graph:

```mermaid
graph TD
    A[A] -->|1| B(B)
    A[A] -->|4| C(C)
    A[A] -->|10| D(D)
    B[B] -->|3| E(E)
    C[C] -->|4| D(D)
    C[C] -->|2| F(F)
    D[D] -->|10| E(E)
    E[E] -->|2| A(A)
    E[E] -->|3| B(B)
    F[F] -->|1| D(D)
```

## Case 1: Calculate the delivery cost for a given delivery route.

This app calculates the route from one town to another.
The user should choose points of the route and then the app gets the result. The application has the opportunity to add stops between two nodes.

## Case 2: Calculate the number of possible delivery routes that can be constructed by given conditions.

The app calculates a count of routes from one town to another. Create a route and you will see the number of available routes.
