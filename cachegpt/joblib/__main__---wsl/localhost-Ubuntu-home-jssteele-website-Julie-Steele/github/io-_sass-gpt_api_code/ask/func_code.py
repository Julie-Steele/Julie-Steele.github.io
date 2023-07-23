# first line: 40
@memory.cache
def ask(message, model=None):
    response = generate([{"role":"user", "content": message}], model=model)
    return response.choices[0].message.content
