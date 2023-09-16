.DEFAULT_GOAL := help

help:
		@echo "Please use 'make <target>' where <target> is one of"
		@echo ""
		@echo "  clean       remove *.pyc files and __pycache__ directory"
		@echo ""
		@echo "Check the Makefile to know exactly what each target is doing."

clean:
	find . -type d -name "__pycache__" | xargs rm -rf {};
	rm -rf venv