# Team Maker

### description

make random team in existed team.
For company workshop! haha

### install

just install **"tfk-json-to-xlsx"** pagakge.
  
~~~bash
user$> npm install
~~~

### example

##### 1. existed team >> #####
~~~json
{
	"result": [
		{
			"leader": "aaa",
			"member": ["d", "e", "f", "g"],
			"newMember": ["h", "i"]
		},
		{
			"leader": "bbb",
			"member": ["j", "j"],
			"newMember": ["l", "m", "n", "o"]
		},
		{
			"leader": "ccc",
			"member": ["p", "q", "r"],
			"newMember": []
		}
	]
}
~~~

##### 2. command >> #####

~~~bash
user$> npm index.js <file_name>    
~~~

##### 3. maked random team (team.xlsx) >> #####

| team  | leader | member1 | member2 | member3 | member4 | member5 |
| ----- | ------ | ------- | ------- | ------- | ------- | ------- |
|   1   |  aaa   |    n    |    m    |    g    |    j    |    d    |
|   2   |  bbb   |    i    |    h    |    q    |    p    |    r    |
|   3   |  ccc   |    o    |    l    |    f    |    e    |    j    |
