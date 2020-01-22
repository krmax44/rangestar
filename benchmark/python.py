import time

start = time.time()

for i in range(1000):
  r = list(range(1000))

end = time.time()

print("Python: ", (end - start) * 1000, 'ms')
