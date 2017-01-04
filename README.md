# Software Cornwall Cluster

A visualisation of the [Software Cornwall Map](https://www.softwarecornwall.org/clustermap/)

It's made up of three things:

1. A dot for each location, separated by a little simulated force.
2. A concave hull formed around the outmost points.
3. A number of links between each points and it's closest siblings.

The SVG is generated using `d3`, the concave hull is using `concaveman` and the closest points are calulated using the `haversine` calculation.
