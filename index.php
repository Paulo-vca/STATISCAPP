<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>STATISCAPP</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="m-5 p-5 bg-white rounded">
        <h1 class="mb-5">STATISCAPP</h1>
        
        <section id="stage1" class="stage active">
            <h4 class="text-center mb-5">Coloque seus dados</h4>
            <button class="d-block mx-auto p-3 btn btn-primary" onclick="$('.stage').hide(); $('#stage2').show() ">Selecionar</button>
        </section>

        <section id="stage2" class="stage">
            <table class="table">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
                <tr>
                    <td>
                        <button type="button" class="btn btn-primary">Escolher grafico</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary">Escolher grafico</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary">Escolher grafico</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>

    </div>
</body>
</html>