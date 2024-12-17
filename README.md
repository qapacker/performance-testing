Using Docker:
```sh
docker-compose up
```

Then in a seperate terminal window run the tests using the commands below.

Note if you want to run these scripts against an API hosted on another machine you can use the HOSTNAME environment variable. e.g.

```sh
k6 run -e HOSTNAME=192.168.1.1:5157 tests/stress-test.js
```

## Simple Test
```sh
k6 run tests/simple-test.js
```

## Stress Test
```sh
k6 run tests/stress-test.js
```

## Load Test
```sh
k6 run tests/load-test.js
```

## Spike Test
```sh
k6 run tests/spike-test.js
```

## Soak Test
```sh
k6 run tests/soak-test.js
```