# Generated by Django 3.2 on 2021-04-12 01:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_product_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='rating',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7),
        ),
    ]
